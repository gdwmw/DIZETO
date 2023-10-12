import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { SiMoonrepo } from "react-icons/si";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    setMounted(true);

    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!mounted) {
    return (
      <div className="fixed right-10 top-3 z-[21] h-10 w-10">
        <Image src={require("@/assets/loading/loading.svg")} alt="Loading" height={40} width={40} />
      </div>
    );
  }

  return (
    <div className="fixed right-10 top-3 z-[21] flex h-10 w-10 items-center justify-center">
      <div onClick={() => setIsOpen(true)} className="cursor-pointer hover:text-red-600 dark:text-white dark:hover:text-red-600">
        {theme === "light" && <BsSunFill size={20} />}
        {theme === "dark" && <BsFillMoonStarsFill size={20} />}
        {theme === "system" && <SiMoonrepo size={20} />}
      </div>
      {isOpen && (
        <ul
          ref={menuRef}
          className="absolute -right-7 top-16 flex flex-col items-center justify-center gap-5 rounded-lg border border-black/50 p-5 shadow-md shadow-black/50 backdrop-blur-md dark:border-white/50 dark:text-white dark:shadow-white/50"
        >
          <li
            onClick={() => {
              setTheme("light");
              setIsOpen(false);
            }}
            className="flex cursor-pointer items-center gap-2 hover:text-red-600 dark:text-white dark:hover:text-red-600"
          >
            <BsSunFill size={20} />
            <span className="font-bold">Light</span>
          </li>
          <li
            onClick={() => {
              setTheme("dark");
              setIsOpen(false);
            }}
            className="flex cursor-pointer items-center gap-2 hover:text-red-600 dark:text-white dark:hover:text-red-600"
          >
            <BsFillMoonStarsFill size={20} />
            <span className="font-bold">Dark</span>
          </li>
          <li
            onClick={() => {
              setTheme("system");
              setIsOpen(false);
            }}
            className="flex cursor-pointer items-center gap-2 hover:text-red-600 dark:text-white dark:hover:text-red-600"
          >
            <SiMoonrepo size={20} />
            <span className="font-bold">System</span>
          </li>
        </ul>
      )}
    </div>
  );
}
