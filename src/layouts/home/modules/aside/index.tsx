"use client";

import { FC, ReactElement } from "react";

import Link from "next/link";
import { CgClose } from "react-icons/cg";

import { useGlobalStates } from "@/hooks/global";

import { LINKS_DATA } from "../header/batches";

export const ASide: FC = (): ReactElement => {
  const { openASide, setOpenASide } = useGlobalStates();

  return (
    <aside
      className={`fixed right-0 top-0 h-dvh w-full max-w-[250px] bg-black/10 p-10 shadow-black/50 backdrop-blur-md transition-all dark:bg-white/10 dark:shadow-white/50 ${openASide ? "translate-x-0 shadow-md" : "translate-x-full shadow-none"}`}
    >
      <nav className="relative">
        <button className="absolute right-0 top-0" onClick={() => setOpenASide(false)} type="button">
          <CgClose size={25} />
        </button>
        <ul className="space-y-8 font-semibold">
          {LINKS_DATA.map((dt, index) => (
            <li key={index}>
              <Link href={dt.href} onClick={() => setOpenASide(false)}>
                {dt.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
