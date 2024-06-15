import { FC, ReactElement, useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { SiMoonrepo } from "react-icons/si";

import { ITheme } from "@/utils";

type T = {
  dataTheme: ITheme[] | undefined;
};

export const IconBasedOnTheme: FC<T> = ({ dataTheme }): ReactElement => {
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
    if (dataTheme?.[0].theme === "system") {
      return <SiMoonrepo size={22} />;
    } else if (dataTheme?.[0].theme === "light") {
      return <BsFillSunFill size={22} />;
    } else {
      return <BsFillMoonFill size={22} />;
    }
  };

  return icon ?? initialIconValue();
};
