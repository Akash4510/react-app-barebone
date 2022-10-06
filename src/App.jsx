import React, { useState, useEffect } from "react";

import { ThemeContext } from "./context/themeContext";
import { ThemeToggleBtn } from "./components";
import "./App.scss";

const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app app--theme-${theme}`}>
        <h1>App</h1>
        <ThemeToggleBtn />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
