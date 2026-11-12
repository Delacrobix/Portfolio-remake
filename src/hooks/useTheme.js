import { useSyncExternalStore } from "react";
import { getTheme, subscribeToTheme } from "../lib/theme";

/** The current theme, "light" or "dark". Change it with setTheme(). */
export default function useTheme() {
  return useSyncExternalStore(subscribeToTheme, getTheme);
}
