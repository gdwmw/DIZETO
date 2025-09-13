import { FC, ReactElement } from "react";

export const Footer: FC = (): ReactElement => (
  <footer className="container mx-auto px-5 py-10">
    <div className="flex h-28 items-center justify-center rounded-xl border border-black/50 bg-red-600 px-5 text-white shadow-md shadow-black/50 dark:border-white/50 dark:shadow-white/50">
      <p className="text-center text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">WE&apos;RE LOOKING FORWARD TO HEARING FROM YOU!</p>
    </div>
  </footer>
);
