import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactElement } from "react";

import { twm } from "@/src/libs";

/* eslint-disable perfectionist/sort-union-types */
export type TButton = {
  className?: string;
  color?: "red" | "white" | "black";
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
/* eslint-enable perfectionist/sort-union-types */

export const ButtonTWM = ({ className, color, disabled, size, variant }: TButton) =>
  twm(
    "flex items-center gap-2",
    // ⭐ === BASE === ⭐
    variant !== "ghost" && "justify-center rounded-md",
    !disabled && "active:scale-95",
    disabled && "cursor-not-allowed",

    // ⭐ === SOLID === ⭐
    variant === "solid" && color === "red" && !disabled && "bg-red-600 text-white hover:bg-red-700 hover:ring-1 hover:ring-red-800 active:bg-red-800",

    variant === "solid" &&
      color === "white" &&
      !disabled &&
      "bg-white text-black hover:bg-red-700 hover:text-white hover:ring-1 hover:ring-red-800 active:bg-red-800 active:text-white dark:bg-black dark:text-white",

    variant === "solid" &&
      color === "black" &&
      !disabled &&
      "bg-black text-white hover:bg-red-700 hover:ring-1 hover:ring-red-800 active:bg-red-800 dark:bg-white dark:text-black dark:hover:text-white dark:active:text-white",

    variant === "solid" && disabled && "bg-gray-400 text-white",

    // ⭐ === OUTLINE === ⭐
    variant === "outline" &&
      color === "red" &&
      !disabled &&
      "bg-transparent text-red-600 ring-1 ring-red-600 hover:bg-red-700 hover:text-white hover:ring-red-800 active:bg-red-800",

    variant === "outline" &&
      color === "white" &&
      !disabled &&
      "bg-transparent text-white ring-1 ring-white hover:bg-red-700 hover:text-white hover:ring-red-800 active:bg-red-800 dark:text-black dark:ring-black",

    variant === "outline" &&
      color === "black" &&
      !disabled &&
      "bg-transparent text-black ring-1 ring-black hover:bg-red-700 hover:text-white hover:ring-red-800 active:bg-red-800 dark:text-white dark:ring-white",

    variant === "outline" && disabled && "bg-transparent text-gray-400 ring-1 ring-gray-400",

    // ⭐ === GHOST === ⭐
    variant === "ghost" && color === "red" && !disabled && "text-red-600 hover:text-red-700 active:text-red-800",

    variant === "ghost" && color === "white" && !disabled && "text-white hover:text-red-700 active:text-red-800 dark:text-black",

    variant === "ghost" && color === "black" && !disabled && "text-black hover:text-red-700 active:text-red-800 dark:text-white",

    variant === "ghost" && disabled && "text-gray-400",

    // ⭐ === SIZE === ⭐
    size === "sm" && variant !== "ghost" && "h-10 min-w-28 px-3 text-base",

    size === "md" && variant !== "ghost" && "h-11 min-w-32 px-4 text-lg",

    size === "lg" && variant !== "ghost" && "h-12 min-w-36 px-5 text-xl",

    // ⭐ === GHOST SIZE === ⭐
    size === "sm" && variant === "ghost" && "text-base",

    size === "md" && variant === "ghost" && "text-lg",

    size === "lg" && variant === "ghost" && "text-xl",

    // ⭐ === CLASSNAME === ⭐
    className,
  );

export const Button: FC<TButton> = ({ className, color, disabled, size, variant, ...props }): ReactElement => (
  <button className={ButtonTWM({ className, color, disabled, size, variant })} data-testid="button" disabled={disabled} {...props}>
    {props.children}
  </button>
);
