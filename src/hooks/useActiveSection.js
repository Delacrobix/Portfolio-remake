import { useEffect, useState } from "react";

// Distance from the top of the viewport at which a section counts as current.
const OFFSET = 140;

/** Id of the section currently under the top bar, or null above the first one. */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    function update() {
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      if (atBottom) {
        setActive(ids.at(-1));
        return;
      }
      let current = null;
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= OFFSET) current = id;
      }
      setActive(current);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ids]);

  return active;
}
