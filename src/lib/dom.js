/** Scrolls to an element and briefly highlights it. */
export function revealElement(id, { block = "center", flashSelector } = {}) {
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({ block });
  const target = (flashSelector && element.querySelector(flashSelector)) || element;
  target.classList.remove("flash");
  // Reading a layout property restarts the animation when the class is re-added.
  void target.offsetWidth;
  target.classList.add("flash");
}

export function openInNewTab(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
