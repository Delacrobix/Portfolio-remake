import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import i18n from "../config/languages";

const LANGUAGES = [
  { key: "en", label: "English", flag: "🇺🇸" },
  { key: "es", label: "Español", flag: "🇨🇴" },
];

export default function SwitchLanguage() {
  const [selected, setSelected] = useState("en");

  function handleSelect(key) {
    setSelected(key);
    i18n.changeLanguage(key);
  }

  const current = LANGUAGES.find((l) => l.key === selected);

  return (
    <Dropdown placement='bottom-end'>
      <DropdownTrigger>
        <Button
          variant='flat'
          size='sm'
          className='font-rubik font-semibold gap-1 min-w-0 px-3'>
          <span>{current.flag}</span>
          <span className='text-xs'>{current.label}</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label='Language'
        selectionMode='single'
        selectedKeys={new Set([selected])}
        onAction={(key) => handleSelect(key)}>
        {LANGUAGES.map(({ key, label, flag }) => (
          <DropdownItem key={key} startContent={<span>{flag}</span>}>
            {label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
