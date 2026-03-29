import { useState } from "react";
import { PALETTES, DEFAULT_PALETTE } from "../config/palettes";

export function applyPalette(key) {
  const html = document.documentElement;
  PALETTES.forEach((p) => html.classList.remove(p.key));
  html.classList.add(key);
  localStorage.setItem("palette", key);
}

export default function PaletteSwitcher() {
  const [active, setActive] = useState(
    () => localStorage.getItem("palette") || DEFAULT_PALETTE
  );

  function handleSelect(key) {
    applyPalette(key);
    setActive(key);
  }

  return (
    <div className='flex items-center gap-[7px]'>
      {PALETTES.map(({ key, label, accent }) => (
        <button
          key={key}
          title={label}
          onClick={() => handleSelect(key)}
          className={`w-[18px] h-[18px] rounded-full border-2 transition-all duration-200 cursor-pointer ${
            active === key
              ? "border-white scale-110 shadow-sm"
              : "border-transparent opacity-60 hover:opacity-100 hover:scale-110"
          }`}
          style={{ backgroundColor: accent }}
        />
      ))}
    </div>
  );
}
