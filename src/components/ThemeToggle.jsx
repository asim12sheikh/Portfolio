import {useState} from 'react';
import { Moon, Sun } from "lucide-react";
import { useEffect } from 'react';
import { cn } from '../lib/utils';


export const ThemeToggle = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
     const savedTheme = localStorage.getItem("theme");
     if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
     } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false)
     } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
     }
  }, []);
 

  const toggleTheme = () => {
   
    if (isDarkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light"); 
        setIsDarkMode(false)
    }else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark")
        setIsDarkMode(true)
    };
  };
  return (
 
  <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-15 right-4 z-50 rounded-full transition-colors duration-300 p-2 ",
    "focus:outline-hidden"
  )}>
     {isDarkMode ? ( <Sun className="h-6 width-6 text-yellow-400" />)
      : ( <Moon className='h-6 w-6 text-blue-900' />
       )}
      </button>
      );
  
};

