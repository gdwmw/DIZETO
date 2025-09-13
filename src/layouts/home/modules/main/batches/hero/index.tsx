import { FC, ReactElement } from "react";

export const Hero: FC = (): ReactElement => (
  <section className="container mx-auto flex h-[400px] items-center justify-center px-5 sm:h-[600px] sm:flex-col sm:gap-3 dark:text-white" id="hero">
    <h1 className="text-7xl font-semibold sm:text-8xl">
      <span className="text-red-600">DI</span>ZETO
    </h1>
    <p className="hidden font-semibold sm:block sm:text-lg md:text-xl">PRODUCTION • ENTERTAINMENT • TALENT • MUSIC RECORD</p>
  </section>
);
