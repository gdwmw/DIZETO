import { cn } from "@/libs";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, FC, ReactElement } from "react";

const ButtonCVA = cva("rounded-md border-2 border-red-600 font-semibold px-4 py-2 text-red-600 hover:bg-red-600 hover:text-white");

interface I extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonCVA> {}

const Button: FC<I> = ({ className, children, ...props }): ReactElement => {
  return (
    <button className={cn(ButtonCVA({ className }))} {...props}>
      {children}
    </button>
  );
};

export { Button, ButtonCVA };
