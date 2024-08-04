import { FC, PropsWithChildren, ReactElement } from "react";

import { MdError } from "react-icons/md";

import { twm } from "@/src/libs/tailwind-merge";

/* eslint-disable perfectionist/sort-union-types */
type T = {
  color?: "white" | "black";
  disabled?: boolean;
  errorMessage?: string;
  fieldsetClassName?: string;
  label?: string;
  legendClassName?: string;
} & Readonly<PropsWithChildren>;
/* eslint-enable perfectionist/sort-union-types */

const FieldsetTWM = ({ color, disabled, fieldsetClassName }: T) =>
  twm(
    "group overflow-hidden rounded-md border-2 px-1 pb-2",
    color === "white" && !disabled && "border-white text-white focus-within:border-red-600 dark:border-black dark:text-black",
    color === "black" && !disabled && "border-black text-black focus-within:border-red-600 dark:border-white dark:text-white",
    disabled && "border-gray-400",
    fieldsetClassName,
  );

const LegendTWM = ({ color, disabled, legendClassName }: T) =>
  twm(
    "ml-3 flex select-none items-center gap-1 whitespace-nowrap px-1 text-xs font-semibold",
    color === "white" && !disabled && "group-focus-within:text-red-600",
    color === "black" && !disabled && "group-focus-within:text-red-600",
    disabled && "text-gray-400",
    legendClassName,
  );

export const Label: FC<T> = ({ color, disabled, errorMessage, fieldsetClassName, label, legendClassName, ...props }): ReactElement => (
  <fieldset className={FieldsetTWM({ color, disabled, fieldsetClassName })}>
    <legend className={LegendTWM({ color, disabled, legendClassName })}>
      {label}
      {errorMessage && !disabled && <MdError className="text-red-600" />}
    </legend>

    <div className="flex items-center justify-center">{props.children}</div>
  </fieldset>
);
