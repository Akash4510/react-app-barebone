import { createContext, useContext } from "react";

export const ThemeContext = createContext(true);
export const useTheme = () => useContext(ThemeContext);
