import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);
  const body = document.body;

  useEffect(() => {
    body.classList.toggle("dark-mode", darkMode);
  }, [darkMode, body.classList]);
  return [darkMode, setDarkMode];
};
