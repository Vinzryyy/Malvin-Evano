import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

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
      className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )}
    >
      {isDarkMode ? (
       <Sun className="h-6 w-6 text-foreground" />
      ) : (
        <Moon className="h-6 w-6 text-foreground" />
      )}
    </button>
  );
};
