import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const SwitchTheme = () => {
  const [theme, setTheme] = useState("light");
  const colorTheme = theme === "dark" ? "light" : "dark";
  const [darkToggle, setDarkToggle] = useState(
    colorTheme === "light" ? false : true
  );
  const toggleTheme = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkToggle(checked);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
    console.log("theme", theme);
  }, [colorTheme, theme]);

  return (
    <div className="hidden absolute md:right-4 md:top-4 top-2 right-2 md:inline-block">
      <DarkModeSwitch
        checked={darkToggle}
        onChange={toggleTheme}
        size={60}
        moonColor="#f5f5f5"
        sunColor="#f2f2f2"
      />
    </div>
  );
};

export default SwitchTheme;
