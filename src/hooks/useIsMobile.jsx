import { useEffect, useState } from "react";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 849px)");

    function handleResize(event) {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener("change", handleResize);

    setIsMobile(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return isMobile;
}
