import { FC, ReactElement, ReactNode } from "react";

import Link from "next/link";

import { ButtonTWM } from "../buttons/button";

type TContactInfo = {
  href: string | undefined;
  icon: ReactNode;
  label: string | undefined;
  title: string | undefined;
};

// TODO: Jangan lupa nanti lanjutin bikin Unit Testing dan Storybook untuk ContactInfo

export const ContactInfo: FC<TContactInfo> = ({ href, icon, label, title }): ReactElement => {
  return (
    <div className="flex items-center gap-2">
      <div className="min-h-fit min-w-fit">{icon}</div>
      <h3 className="font-bold">{title}:</h3>
      <Link className={ButtonTWM({ color: "black", size: "sm", variant: "ghost" })} href={href ?? ""} target="_blank">
        {label}
      </Link>
    </div>
  );
};
