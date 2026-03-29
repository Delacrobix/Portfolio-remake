(function () {
  const palette = localStorage.getItem("palette") || "palette-amethyst";
  document.documentElement.classList.add("dark", palette);
})();
