import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/Themebtn";
import { ThemeProvider } from "./context/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  //actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <h1> React Theme Changer</h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
          {/*  theme Button */}

          <ThemeBtn />
          <div className="w-full max-w-sm mx-auto"></div>
          {/* Card  */}

          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
