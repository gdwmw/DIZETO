import { FC, ReactElement } from "react";

export const Footer: FC = (): ReactElement => {
  return (
    <footer className="container mx-auto mt-10 px-5 pb-10">
      <div className="footer-paper">
        <p className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">{`WE'RE LOOKING FORWARD TO HEARING FROM YOU!`}</p>
      </div>
    </footer>
  );
};
