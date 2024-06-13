import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactElement } from "react";

import { twm } from "@/libs";

/* eslint-disable perfectionist/sort-union-types */
export type TButton = {
  className?: string;
  disabled?: boolean;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
/* eslint-enable perfectionist/sort-union-types */

export const ButtonTWM = ({ className }: TButton) => {
  return twm(
    "flex h-10 min-w-28 items-center justify-center gap-2 rounded-md px-3 text-base font-semibold text-red-600 ring-2 ring-red-600 hover:bg-red-600 hover:text-white active:scale-95",

    // ⭐ === CLASSNAME === ⭐
    className,
  );
};

export const Button: FC<TButton> = ({ className, disabled, ...props }): ReactElement => {
  return (
    <button className={ButtonTWM({ className })} data-testid="button" disabled={disabled} {...props}>
      {props.children}
    </button>
  );
};
