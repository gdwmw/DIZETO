"use client";

import { DetailedHTMLProps, FC, forwardRef, ReactElement, SelectHTMLAttributes } from "react";

import { MdError } from "react-icons/md";

import { twm } from "@/src/libs/tailwind-merge";

/* eslint-disable perfectionist/sort-union-types */
type TSelect = {
  className?: string;
  color?: "white" | "black";
  containerClassName?: string;
  disabled?: boolean;
  errorMessage?: string;
  fieldsetClassName?: string;
  label?: string;
  legendClassName?: string;
} & DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
/* eslint-enable perfectionist/sort-union-types */

// TODO: Jangan lupa nanti lanjutin bikin Unit Testing dan Storybook untuk Select

const FieldsetSelectTWM = ({ color, disabled, fieldsetClassName }: TSelect) =>
  twm(
    "group overflow-hidden rounded-md border-2 px-1 pb-2",
    color === "white" && !disabled && "border-white text-white focus-within:border-red-600 dark:border-black dark:text-black",
    color === "black" && !disabled && "border-black text-black focus-within:border-red-600 dark:border-white dark:text-white",
    disabled && "border-gray-400",
    fieldsetClassName,
  );

const LegendSelectTWM = ({ color, disabled, legendClassName }: TSelect) =>
  twm(
    "ml-3 flex select-none items-center gap-1 whitespace-nowrap px-1 text-xs font-semibold",
    color === "white" && !disabled && "group-focus-within:text-red-600",
    color === "black" && !disabled && "group-focus-within:text-red-600",
    disabled && "text-gray-400",
    legendClassName,
  );

const SelectTWM = ({ className, disabled }: TSelect) =>
  twm("w-full rounded-sm bg-transparent px-1 outline-none disabled:cursor-not-allowed", disabled && "text-gray-400", className);

export const Select: FC<TSelect> = forwardRef<HTMLSelectElement, TSelect>(
  ({ className, color, containerClassName, disabled, errorMessage, fieldsetClassName, label, legendClassName, ...props }, ref): ReactElement => (
    <section className={twm("space-y-1", containerClassName)}>
      <fieldset className={FieldsetSelectTWM({ color, disabled, fieldsetClassName })}>
        <legend className={LegendSelectTWM({ color, disabled, legendClassName })}>
          {label}
          {errorMessage && !disabled && <MdError className="text-red-600" />}
        </legend>

        <div className="flex items-center justify-center">
          <select className={SelectTWM({ className, disabled })} disabled={disabled} ref={ref} {...props}>
            {props.children}
          </select>
        </div>
      </fieldset>

      {errorMessage && !disabled && <span className="ml-1 block text-xs font-semibold text-red-600">{errorMessage}</span>}
    </section>
  ),
);

Select.displayName = "Select";
