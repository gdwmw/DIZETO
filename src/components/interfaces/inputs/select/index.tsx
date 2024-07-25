"use client";

import { DetailedHTMLProps, FC, forwardRef, ReactElement, SelectHTMLAttributes } from "react";

import { MdError } from "react-icons/md";

import { twm } from "@/src/libs/tailwind-merge";

/* eslint-disable perfectionist/sort-union-types */
type TSelect = {
  color?: "white" | "black";
  disabled?: boolean;
  errorMessage?: string;
  label?: string;
} & DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
/* eslint-enable perfectionist/sort-union-types */

// TODO: Jangan lupa nanti lanjutin bikin Unit Testing dan Storybook untuk Select

const FieldsetSelectTWM = ({ color, disabled }: TSelect) => {
  return twm(
    "group overflow-hidden rounded-md border-2 px-1 pb-2",
    color === "white" && !disabled && "border-white text-white focus-within:border-red-600 dark:border-black dark:text-black",
    color === "black" && !disabled && "border-black text-black focus-within:border-red-600 dark:border-white dark:text-white",
    disabled && "border-gray-400",
  );
};

const LegendSelectTWM = ({ color, disabled }: TSelect) => {
  return twm(
    "ml-3 flex select-none items-center gap-1 whitespace-nowrap px-1 text-xs font-semibold",
    color === "white" && !disabled && "group-focus-within:text-red-600",
    color === "black" && !disabled && "group-focus-within:text-red-600",
    disabled && "text-gray-400",
  );
};

export const Select: FC<TSelect> = forwardRef<HTMLSelectElement, TSelect>(({ color, disabled, errorMessage, label, ...props }, ref): ReactElement => {
  return (
    <section className="space-y-1">
      <fieldset className={FieldsetSelectTWM({ color, disabled })}>
        <legend className={LegendSelectTWM({ color, disabled })}>
          {label}
          {errorMessage && !disabled && <MdError className="text-red-600" />}
        </legend>

        <div className="flex items-center justify-center">
          <select
            className={`w-full rounded-sm bg-transparent px-1 outline-none disabled:cursor-not-allowed ${disabled ? "text-gray-400" : ""}`}
            disabled={disabled}
            ref={ref}
            {...props}
          >
            {props.children}
          </select>
        </div>
      </fieldset>

      {errorMessage && !disabled && <span className="ml-1 text-xs font-semibold text-red-600">{errorMessage}</span>}
    </section>
  );
});

Select.displayName = "Select";
