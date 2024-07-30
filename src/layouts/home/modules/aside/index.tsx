"use client";

import { FC, ReactElement } from "react";

import Link from "next/link";
import { CgClose } from "react-icons/cg";

import { Button, ButtonTWM } from "@/src/components/interfaces/buttons/button";
import { useGlobalStates } from "@/src/context";
import { NAVIGATION_DATA } from "@/src/libs/constants";

import { handleSmoothScroll } from "../nav";

export const ASide: FC = (): ReactElement => {
  const { openASide, setOpenASide } = useGlobalStates();

  return (
    <aside
      className={`fixed inset-y-0 right-0 z-[3] w-full max-w-[250px] bg-white/50 p-5 shadow-black/50 backdrop-blur-md transition-all dark:bg-black/50 dark:shadow-white/50 ${openASide ? "translate-x-0 shadow-md" : "translate-x-full shadow-none"}`}
    >
      <div className="relative">
        <Button className="absolute right-0 top-0" color="black" onClick={() => setOpenASide(false)} size="sm" type="button" variant="ghost">
          <CgClose size={25} />
        </Button>
        <ul className="space-y-8 font-semibold">
          {NAVIGATION_DATA.map((dt) => (
            <li key={dt.id}>
              <Link
                className={ButtonTWM({ color: "black", size: "sm", variant: "ghost" })}
                href={dt.href}
                onClick={(e) => {
                  handleSmoothScroll(e, dt.href);
                  setOpenASide(false);
                }}
              >
                {dt.label}
              </Link>
            </li>
          ))}
          <li>
            <Link className={ButtonTWM({ className: "h-8 min-w-[80px] px-0", color: "red", size: "sm", variant: "outline" })} href={"/login"}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
