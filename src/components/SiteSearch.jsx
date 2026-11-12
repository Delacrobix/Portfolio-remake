import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { excerpt, normalize, queryTokens, searchEntries } from "../lib/search";
import { revealElement } from "../lib/dom";
import Highlight from "./Highlight";
import SearchField from "./SearchField";

const GROUP_LIMITS = { articles: 4, videos: 3 };
const DEFAULT_GROUP_LIMIT = 5;
const SCOPED_LIMIT = 8;
const NOTICE_MS = 5000;
// The results panel never grows past the space left under the field.
const PANEL_GAP_PX = 16;
const PANEL_MIN_HEIGHT_PX = 220;
// When less than this is free under the field, the page scrolls the field up to make room.
const PANEL_COMFORT_PX = 440;
const TOP_BAR_CLEARANCE_PX = 88;

function parseCommand(query, commands) {
  const [name = "", ...rest] = query.slice(1).trimStart().split(/\s+/);
  const key = normalize(name);
  return {
    key,
    term: rest.join(" ").trim(),
    exact: commands.find((command) => command.aliases.includes(key)),
    candidates: commands.filter((command) => command.aliases.some((alias) => alias.startsWith(key))),
  };
}

/** Groups search results by section, the best-matching section first. */
function groupResults(results, t, limitFor) {
  const groups = new Map();
  for (const result of results) {
    const key = result.entry.group;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(result.entry);
  }
  return [...groups].map(([key, entries]) => {
    const count = entries.filter((entry) => !entry.isSection).length;
    const options = entries.slice(0, limitFor(key)).map((entry) => ({ type: "entry", entry }));
    if (key === "articles" && count > options.length) options.push({ type: "allArticles", count });
    return { key, label: t(`nav.${key}`), count, options };
  });
}

/** What the panel shows for a query: grouped options, or a message. */
function buildView(query, entries, commands, t) {
  const trimmed = query.trim();
  if (!trimmed) return { groups: [], tokens: [], term: "" };

  if (!trimmed.startsWith("/")) {
    const groups = groupResults(
      searchEntries(entries, trimmed),
      t,
      (key) => GROUP_LIMITS[key] ?? DEFAULT_GROUP_LIMIT
    );
    return {
      groups,
      tokens: queryTokens(trimmed),
      term: trimmed,
      message: groups.length ? null : t("search.empty", { query: trimmed }),
    };
  }

  const { key, term, exact, candidates } = parseCommand(trimmed, commands);
  const asGroup = (list) => [
    {
      key: "commands",
      label: t("search.commandsTitle"),
      count: 0,
      options: list.map((command) => ({ type: "command", command })),
    },
  ];

  if (exact?.scope && term) {
    const scoped = entries.filter((entry) => entry.group === exact.scope && !entry.isSection);
    const groups = groupResults(searchEntries(scoped, term), t, () => SCOPED_LIMIT);
    return {
      groups,
      tokens: queryTokens(term),
      term,
      message: groups.length ? null : t("search.empty", { query: term }),
    };
  }
  if (exact) {
    return { groups: asGroup([exact]), tokens: [], term: "", message: exact.scope ? t("search.scopeHint") : null };
  }
  if (candidates.length) return { groups: asGroup(candidates), tokens: [], term: "" };
  return { groups: [], tokens: [], term: "", message: t("search.noCommand", { query: `/${key}` }) };
}

const OPTION_CLASS =
  "grid w-full cursor-pointer grid-cols-[1fr_auto] items-baseline gap-x-3.5 gap-y-0.5 px-[18px] py-[9px] text-left no-underline hover:bg-brand-wash aria-selected:bg-brand-wash";

export default function SiteSearch({ entries, commands, onFilterArticles }) {
  const { t } = useTranslation();
  const listId = useId();
  const rootRef = useRef(null);
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [notice, setNotice] = useState("");
  const [panelMaxHeight, setPanelMaxHeight] = useState(PANEL_MIN_HEIGHT_PX);

  const view = useMemo(() => buildView(query, entries, commands, t), [query, entries, commands, t]);
  const options = useMemo(() => view.groups.flatMap((group) => group.options), [view]);
  const showPanel = open && (options.length > 0 || Boolean(view.message));
  const optionId = (index) => `${listId}-option-${index}`;

  // "/" focuses the search from anywhere outside a text field.
  useEffect(() => {
    function onKeyDown(event) {
      const tag = document.activeElement?.tagName;
      if (event.key !== "/" || tag === "INPUT" || tag === "TEXTAREA") return;
      event.preventDefault();
      inputRef.current.focus();
      inputRef.current.scrollIntoView({ block: "center" });
    }
    function onPointerDown(event) {
      if (!rootRef.current.contains(event.target)) setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  useEffect(() => {
    if (!showPanel) return;
    function fitPanel() {
      const fieldBottom = inputRef.current.getBoundingClientRect().bottom;
      setPanelMaxHeight(Math.max(PANEL_MIN_HEIGHT_PX, window.innerHeight - fieldBottom - PANEL_GAP_PX * 2));
    }
    const field = inputRef.current.parentElement.getBoundingClientRect();
    if (window.innerHeight - field.bottom < PANEL_COMFORT_PX && field.top > TOP_BAR_CLEARANCE_PX) {
      window.scrollBy({ top: field.top - TOP_BAR_CLEARANCE_PX });
    }
    fitPanel();
    window.addEventListener("resize", fitPanel);
    window.addEventListener("scroll", fitPanel, { passive: true });
    return () => {
      window.removeEventListener("resize", fitPanel);
      window.removeEventListener("scroll", fitPanel);
    };
  }, [showPanel]);

  useEffect(() => {
    if (showPanel) document.getElementById(optionId(selected))?.scrollIntoView({ block: "nearest" });
  }, [selected, showPanel]);

  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(""), NOTICE_MS);
    return () => clearTimeout(timer);
  }, [notice]);

  function change(value) {
    setQuery(value);
    setSelected(0);
    setOpen(true);
    setNotice("");
  }

  function close() {
    setOpen(false);
    setSelected(0);
  }

  async function runCommand(command) {
    if (command.scope) {
      change(`/${command.name} `);
      inputRef.current.focus();
      return;
    }
    close();
    setQuery("");
    const message = await command.run();
    if (typeof message === "string") setNotice(message);
  }

  /** Activates an option. Returns false when the browser should follow the link itself. */
  function activate(option) {
    if (option.type === "command") {
      runCommand(option.command);
      return true;
    }
    if (option.type === "allArticles") {
      onFilterArticles(view.term);
      close();
      inputRef.current.blur();
      revealElement("articles", { block: "start", flashSelector: "h2" });
      return true;
    }
    const { entry } = option;
    if (entry.url) return false;
    close();
    inputRef.current.blur();
    revealElement(
      entry.targetId,
      entry.isSection ? { block: "start", flashSelector: "h2" } : undefined
    );
    return true;
  }

  function onKeyDown(event) {
    if (event.key === "Escape") {
      close();
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!options.length) return;
      setOpen(true);
      const step = event.key === "ArrowDown" ? 1 : -1;
      setSelected((current) => (current + step + options.length) % options.length);
    } else if (event.key === "Enter" && options.length) {
      event.preventDefault();
      const index = Math.min(selected, options.length - 1);
      // Links to other sites are followed by clicking the option so the browser opens the tab.
      if (!activate(options[index])) document.getElementById(optionId(index)).click();
    }
  }

  let optionIndex = -1;
  const renderOption = (option) => {
    optionIndex += 1;
    const index = optionIndex;
    const common = {
      id: optionId(index),
      role: "option",
      "aria-selected": index === selected,
      className: OPTION_CLASS,
    };

    if (option.type === "command") {
      const { command } = option;
      return (
        <button
          key={command.id}
          type='button'
          {...common}
          className={`${OPTION_CLASS} wide:grid-cols-[190px_1fr] wide:py-[7px]`}
          onClick={() => activate(option)}>
          <b className='text-[17px] font-bold'>
            /{command.name}
            {command.arg && <span className='font-medium text-ink-2'> {command.arg}</span>}
          </b>
          <span className='col-start-1 text-[15.5px] text-ink-2 wide:col-start-2'>{command.text}</span>
        </button>
      );
    }
    if (option.type === "allArticles") {
      return (
        <a
          key='all-articles'
          {...common}
          href='#articles'
          onClick={(event) => {
            event.preventDefault();
            activate(option);
          }}>
          <b className='text-[16.5px] font-semibold text-brand'>
            {t("search.allArticles", { count: option.count })}
          </b>
        </a>
      );
    }

    const { entry } = option;
    const external = entry.url ? { target: "_blank", rel: "noopener noreferrer" } : {};
    const snippet = entry.isSection ? "" : excerpt(entry.text, view.tokens);
    return (
      <a
        key={entry.url ?? entry.targetId}
        {...common}
        {...external}
        href={entry.url ?? `#${entry.targetId}`}
        onClick={(event) => {
          if (activate(option)) event.preventDefault();
          else close();
        }}>
        <b className='text-[17.5px] leading-[1.3] font-bold'>
          {entry.isSection ? (
            t("search.goToSection", { section: entry.title })
          ) : (
            <Highlight text={entry.title} tokens={view.tokens} />
          )}
        </b>
        {entry.meta && <span className='text-[14.5px] whitespace-nowrap text-ink-2'>{entry.meta}</span>}
        {snippet && (
          <span className='col-start-1 line-clamp-1 text-[15.5px] leading-[1.4] text-ink-2'>
            <Highlight text={snippet} tokens={view.tokens} />
          </span>
        )}
      </a>
    );
  };

  return (
    <div ref={rootRef} className='relative mt-[22px] max-w-[760px]'>
      <SearchField
        inputRef={inputRef}
        value={query}
        placeholder={t("search.placeholder")}
        aria-label={t("search.label")}
        role='combobox'
        aria-expanded={showPanel}
        aria-controls={listId}
        aria-autocomplete='list'
        aria-activedescendant={showPanel && options.length ? optionId(selected) : undefined}
        onChange={(event) => change(event.target.value)}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        trailing={
          <kbd
            title={t("search.shortcut")}
            className='ml-3 hidden rounded-md border border-rule-2 px-2 py-px font-sans text-sm font-semibold text-ink-2 wide:block'>
            /
          </kbd>
        }
      />

      <p role='status' className='mt-2.5 font-medium text-ink empty:hidden'>
        {notice}
      </p>
      <p hidden={Boolean(notice)} className='mt-2.5 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-base text-ink-2'>
        {t("search.examplesLabel")}
        {t("search.examples", { returnObjects: true }).map((example, index, list) => (
          <span key={example}>
            <button
              type='button'
              onClick={() => {
                change(example);
                inputRef.current.focus();
              }}
              className='cursor-pointer font-medium text-ink underline decoration-rule-2 transition-colors duration-150 hover:text-brand hover:decoration-brand'>
              {example}
            </button>
            {index < list.length - 1 && ","}
          </span>
        ))}
      </p>

      <div
        id={listId}
        role='listbox'
        aria-label={t("search.results")}
        hidden={!showPanel}
        style={{ maxHeight: panelMaxHeight }}
        className='thin-scrollbar absolute top-[68px] right-0 left-0 z-20 overflow-auto rounded-xl border-[1.5px] border-ink bg-paper pt-1.5 pb-2'>
        {view.groups.map((group) => (
          <div key={group.key} role='group' aria-label={group.label}>
            <p className='flex justify-between px-[18px] pt-3 pb-1 text-[14.5px] font-bold text-ink-2'>
              {group.label}
              {group.count > 0 && <span className='font-medium'>{group.count}</span>}
            </p>
            {group.options.map(renderOption)}
          </div>
        ))}
        {view.message && <p className='px-[18px] py-3 text-[17px] text-ink-2'>{view.message}</p>}
      </div>
    </div>
  );
}
