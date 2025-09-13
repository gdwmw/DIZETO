import Link from "next/link";
import { FC, ReactElement, ReactNode } from "react";

import { ButtonTWM } from "../../";

interface IContactInfo {
  href: string | undefined;
  icon: ReactNode;
  label: string | undefined;
  title: string | undefined;
}

// TODO: Jangan lupa nanti lanjutin bikin Unit Testing dan Storybook untuk ContactInfo

export const ContactInfo: FC<IContactInfo> = ({ href, icon, label, title }): ReactElement => (
  <div className="flex items-start gap-2">
    <div className="flex items-center gap-2">
      {icon}
      <h3 className="font-bold">{title}:</h3>
    </div>
    <Link className={ButtonTWM({ color: "black", size: "sm", variant: "ghost" })} href={href ?? ""} target="_blank">
      {label}
    </Link>
  </div>
);
