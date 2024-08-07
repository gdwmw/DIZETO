"use client";

import { FC, ReactElement, useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { SiMoonrepo } from "react-icons/si";

interface I {
  themeCookie: string | undefined;
}

export const IconBasedOnTheme: FC<I> = (props): ReactElement => {
  const { theme } = useTheme();
  const [icon, setIcon] = useState<null | ReactElement>(null);

  useEffect(() => {
    switch (theme) {
      case "system":
        setIcon(<SiMoonrepo size={22} />);
        break;
      case "light":
        setIcon(<BsFillSunFill size={22} />);
        break;
      case "dark":
        setIcon(<BsFillMoonFill size={22} />);
        break;
      default:
        setIcon(null);
    }
  }, [theme]);

  const initialIconValue = () => {
    switch (props.themeCookie) {
      case "system":
        return <SiMoonrepo size={22} />;
      case "light":
        return <BsFillSunFill size={22} />;
      case "dark":
        return <BsFillMoonFill size={22} />;
      default:
        return <SiMoonrepo size={22} />;
    }
  };

  return icon ?? initialIconValue();
};
