import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        background: theme === "light" ? "#222" : "#fff",
        color: theme === "light" ? "#fff" : "#222",
        border: "none",
        borderRadius: "5px"
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeButton;
