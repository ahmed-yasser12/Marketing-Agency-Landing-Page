import assets from "@/assets/assets";
import "react";
import {  useEffect } from "react";

const ThemeToggleBtn = ({ theme, setTheme }) => {
    useEffect(() => {
        const preferDark=window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(theme||preferDark ? " dark" : "light");
    }, [])
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }else{
        document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <button>
        {theme === "dark" ? (
          <img
            onClick={() => setTheme("light")}
            src={assets.sun_icon}
            className="size-8 p-1.5 border border-gray-500 rounded-full"
            alt=""
          />
        ) : (
          <img
            onClick={() => setTheme("dark")}
            src={assets.moon_icon}
            className="size-8 p-1.5 border border-gray-500 rounded-full"
            alt=""
          />
        )}
      </button>
    </div>
  );
};

export default ThemeToggleBtn;
