import { writable } from "svelte/store";
function getThemeUser() {
  if (localStorage.theme === "light") return true;
  if (localStorage.theme === "dark") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? false
    : true;
}
const createTheme = () => {
  const { subscribe, set, update } = writable(getThemeUser());

  return {
    subscribe,
    setTheme: (theme) => {
      set(theme);
    },
    changeTheme: () => {
      update((th)=> {
        th = !th;
        th ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
        return th
      })
    },
  };
};

export const user = { theme: createTheme() };
