import { useEffect, useState } from "react";
import moon from "./moon-6693.svg";
import sun from "./sun-8727.svg";

export default function ThemeSelector() {
  const [darkTheme, setDarkTheme] = useState<Boolean>(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkTheme) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
    setDarkTheme(!darkTheme);
  };

  return (
    <div
      className="flex justify-center lg:hover:cursor-pointer"
      onClick={toggleTheme}
    >
      <img
        src={darkTheme ? sun.src : moon.src}
        alt="theme"
        height={20}
        width={20}
      />
    </div>
  );
}
