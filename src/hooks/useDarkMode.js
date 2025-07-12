import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [enabled, setEnabled] = useState(
    () =>
      localStorage.theme === "dark" ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches &&
        !("theme" in localStorage))
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (enabled) {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [enabled]);

  return [enabled, setEnabled];
}
