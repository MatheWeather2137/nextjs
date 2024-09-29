import { useState } from "react";
function ThemeSwitcher({ onThemeChange }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    onThemeChange(newTheme);
  };
  return (
    <button onClick={toggleTheme}>
      Zmień motyw na {theme === "light" ? "ciemny" : "jasny"}
    </button>
  );
}

export default ThemeSwitcher;