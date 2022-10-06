import React from "react";

import { useTheme } from "../context/themeContext";

const ThemeToggleBtn = () => {
  const { toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeToggleBtn;
