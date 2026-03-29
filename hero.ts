import { heroui } from "@heroui/react";

export default heroui({
  themes: {
    "palette-teal": {
      extend: "dark",
      colors: {
        background: "#1a2a35",
        foreground: "#d4e4ee",
        primary: { DEFAULT: "#4d8fa8", foreground: "#ffffff" },
        default: { DEFAULT: "#233040", foreground: "#d4e4ee" },
      },
    },
    "palette-slate": {
      extend: "dark",
      colors: {
        background: "#0d1117",
        foreground: "#e6edf3",
        primary: { DEFAULT: "#4493f8", foreground: "#ffffff" },
        default: { DEFAULT: "#161b22", foreground: "#e6edf3" },
      },
    },
    "palette-forest": {
      extend: "dark",
      colors: {
        background: "#0c1a10",
        foreground: "#d1edda",
        primary: { DEFAULT: "#3cb878", foreground: "#ffffff" },
        default: { DEFAULT: "#1c3226", foreground: "#d1edda" },
        content1: { DEFAULT: "#163d22", foreground: "#d1edda" },
        content2: { DEFAULT: "#1e4d2c", foreground: "#d1edda" },
      },
    },
    "palette-amethyst": {
      extend: "dark",
      colors: {
        background: "#110e1e",
        foreground: "#e5dcff",
        primary: { DEFAULT: "#9b5cf6", foreground: "#ffffff" },
        default: { DEFAULT: "#261e40", foreground: "#e5dcff" },
        content1: { DEFAULT: "#1f1545", foreground: "#e5dcff" },
        content2: { DEFAULT: "#2a1c5a", foreground: "#e5dcff" },
      },
    },
    "palette-ember": {
      extend: "dark",
      colors: {
        background: "#1a1008",
        foreground: "#fde0c4",
        primary: { DEFAULT: "#e07a3a", foreground: "#ffffff" },
        default: { DEFAULT: "#342010", foreground: "#fde0c4" },
        content1: { DEFAULT: "#2e1608", foreground: "#fde0c4" },
        content2: { DEFAULT: "#3d1e0a", foreground: "#fde0c4" },
      },
    },
  },
});
