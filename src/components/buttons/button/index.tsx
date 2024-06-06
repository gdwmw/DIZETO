import { ButtonHTMLAttributes, FC, ReactElement } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/libs";

const ButtonCVA = cva("rounded-md border-2 border-red-600 px-4 py-2 font-semibold text-red-600 hover:bg-red-600 hover:text-white");

interface I extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonCVA> {}

const Button: FC<I> = ({ children, className, ...props }): ReactElement => {
  return (
    <button className={cn(ButtonCVA({ className }))} {...props}>
      {children}
    </button>
  );
};

export { Button, ButtonCVA };
