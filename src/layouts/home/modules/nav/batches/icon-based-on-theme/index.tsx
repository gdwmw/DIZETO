"use client";

import { FC, ReactElement, useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { SiMoonrepo } from "react-icons/si";

type T = {
  themeCookie: RequestCookie | undefined;
};

export const IconBasedOnTheme: FC<T> = ({ themeCookie }): ReactElement => {
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
    }
  }, [theme]);

  const initialIconValue = () => {
    if (themeCookie?.value === "system") {
      return <SiMoonrepo size={22} />;
    } else if (themeCookie?.value === "light") {
      return <BsFillSunFill size={22} />;
    } else {
      return <BsFillMoonFill size={22} />;
    }
  };

  return icon ?? initialIconValue();
};
