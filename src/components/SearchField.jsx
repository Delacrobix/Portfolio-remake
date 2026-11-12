import { SearchIcon } from "./icons";

/** The search input used by the site search and the article search. */
export default function SearchField({ inputRef, trailing, ...inputProps }) {
  return (
    <div className='flex h-[60px] items-center rounded-xl border-[1.5px] border-ink bg-paper px-[18px] transition-shadow duration-150 focus-within:border-brand focus-within:ring-4 focus-within:ring-brand-wash'>
      <SearchIcon className='mr-3 size-[22px] flex-none text-ink-2' />
      <input
        ref={inputRef}
        type='search'
        autoComplete='off'
        spellCheck={false}
        className='min-w-0 flex-1 border-0 bg-transparent text-lg font-semibold text-ink caret-brand wide:text-xl outline-none placeholder:font-medium placeholder:text-ink-3'
        {...inputProps}
      />
      {trailing}
    </div>
  );
}
