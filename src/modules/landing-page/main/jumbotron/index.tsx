import { FC, ReactElement } from "react";

export const Jumbotron: FC = (): ReactElement => {
  return (
    <section id="Jumbotron" className="jumbotron">
      <h1 className="text-8xl font-semibold">
        <span className="text-red-600">DI</span>ZETO
      </h1>
      <p className="text-xl font-semibold">PRODUCTION • ENTERTAINMENT • TALENT • MUSIC RECORD</p>
    </section>
  );
};
