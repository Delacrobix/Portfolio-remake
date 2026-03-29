import { useState, useEffect } from "react";

/**
 * Returns items-per-page based on viewport width:
 * - mobile  (<640px):  3
 * - tablet  (<1024px): 4
 * - desktop (≥1024px): 6
 */
export default function usePerPage() {
  function calculate() {
    if (window.innerWidth < 640) return 3;
    if (window.innerWidth < 1024) return 4;
    return 6;
  }

  const [perPage, setPerPage] = useState(calculate);

  useEffect(() => {
    function onResize() {
      setPerPage(calculate());
    }
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return perPage;
}
