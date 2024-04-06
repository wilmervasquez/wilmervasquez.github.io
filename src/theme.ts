function getThemeUser() {
  if (localStorage.theme === "light") return "light";
  if (localStorage.theme === "dark") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

if (getThemeUser() === "dark") {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
}

export {getThemeUser}
