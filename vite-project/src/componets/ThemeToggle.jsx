import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export const ThemeToggle = () => {
  
    const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const html = document.documentElement;

    if (isDarkMode) {
      html.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      html.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md border bg-background"
    >
      {isDarkMode ? (
       <Sun className="h-6 w-6 text-foreground" />
      ) : (
        <Moon className="h-6 w-6 text-foreground" />
      )}
    </button>
  );
};
