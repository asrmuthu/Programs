import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import ThemeButton from "./ThemeButton";

const Page = () => {
  const { theme } = useTheme();

  return (
    <div 
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#222" : "#fff",
        transition: "0.3s"
      }}
    >
      <h1>React Theme Switcher</h1>
      <ThemeButton />
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <Page />
  </ThemeProvider>
);

export default App;
