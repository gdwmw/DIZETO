import { FC, ReactElement, useEffect, useState } from "react";

import { useTheme } from "next-themes";
import Image from "next/image";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { SiMoonrepo } from "react-icons/si";

import loading from "@/public/assets/animations/loadings/loading.svg";

export const IconBasedOnTheme: FC = (): ReactElement => {
  const { theme } = useTheme();
  const [icon, setIcon] = useState<ReactElement>(<Image alt="Loading..." priority src={loading} width={30} />);

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
        setIcon(<Image alt="Loading..." priority src={loading} width={30} />);
        break;
    }
  }, [theme]);

  return icon;
};
