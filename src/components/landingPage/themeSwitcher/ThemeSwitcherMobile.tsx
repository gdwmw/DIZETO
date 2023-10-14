// IMPORT LIBRARIES
import { useTheme } from "next-themes";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { SiMoonrepo } from "react-icons/si";

export default function ThemeSwitcherMobile() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex h-10 w-60 items-center justify-center">
      <ul className="flex gap-10 dark:text-white">
        <li
          onClick={() => setTheme("light")}
          className={`"cursor-pointer ${theme === "light" ? "text-red-600" : "hover:text-red-600"} dark:hover:text-red-600"`}
        >
          <BsSunFill size={25} />
        </li>
        <li
          onClick={() => setTheme("dark")}
          className={`"cursor-pointer ${theme === "dark" ? "text-red-600" : "hover:text-red-600"} dark:hover:text-red-600"`}
        >
          <BsFillMoonStarsFill size={25} />
        </li>
        <li
          onClick={() => setTheme("system")}
          className={`"cursor-pointer ${theme === "system" ? "text-red-600" : "hover:text-red-600"} dark:hover:text-red-600"`}
        >
          <SiMoonrepo size={25} />
        </li>
      </ul>
    </div>
  );
}
