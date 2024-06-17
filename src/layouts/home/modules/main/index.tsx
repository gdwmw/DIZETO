import { FC, ReactElement } from "react";

import { About, Hero } from "./batches";

export const Main: FC = (): ReactElement => {
  return (
    <main className="container mx-auto px-5">
      <Hero />
      <About />
    </main>
  );
};
