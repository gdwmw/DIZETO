import Link from "next/link";
import { FC, ReactElement, ReactNode } from "react";

import { ButtonTWM } from "../..";

interface I {
  href: string;
  icon: ReactNode;
  label: string;
  title: string;
}

export const ContactInfo: FC<I> = (props): ReactElement => (
  <div className="flex items-start gap-2">
    <div className="flex items-center gap-2">
      {props.icon}
      <h3 className="font-bold">{props.title}:</h3>
    </div>
    <Link className={ButtonTWM({ color: "black", size: "sm", variant: "ghost" })} href={props.href ?? ""} target="_blank">
      {props.label}
    </Link>
  </div>
);
