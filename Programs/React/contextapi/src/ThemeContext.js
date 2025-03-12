import { createContext, useContext, useState } from "react";

// Create Theme Context
const ThemeContext = createContext();

// Create Theme Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook to use ThemeContext
export const useTheme = () => useContext(ThemeContext);
