"use client";

import { DetailedHTMLProps, FC, forwardRef, InputHTMLAttributes, ReactElement, ReactNode } from "react";

import { MdError } from "react-icons/md";

import { twm } from "@/src/libs/tailwind-merge";

import { Button } from "../../buttons/button";

/* eslint-disable perfectionist/sort-union-types */
type TInput = {
  color?: "white" | "black";
  disabled?: boolean;
  errorMessage?: string;
  icon?: ReactNode;
  iconOnClick?: () => void;
  label?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
/* eslint-enable perfectionist/sort-union-types */

// TODO: Jangan lupa nanti lanjutin bikin Unit Testing dan Storybook untuk Input

const FieldsetInputTWM = ({ color, disabled }: TInput) => {
  return twm(
    "group overflow-hidden rounded-md border-2 px-1 pb-2",
    color === "white" && !disabled && "border-white text-white focus-within:border-red-600 dark:border-black dark:text-black",
    color === "black" && !disabled && "border-black text-black focus-within:border-red-600 dark:border-white dark:text-white",
    disabled && "border-gray-400",
  );
};

const LegendInputTWM = ({ color, disabled }: TInput) => {
  return twm(
    "ml-3 flex select-none items-center gap-1 whitespace-nowrap px-1 text-xs font-semibold",
    color === "white" && !disabled && "group-focus-within:text-red-600",
    color === "black" && !disabled && "group-focus-within:text-red-600",
    disabled && "text-gray-400",
  );
};

export const Input: FC<TInput> = forwardRef<HTMLInputElement, TInput>(
  ({ color, disabled, errorMessage, icon, iconOnClick, label, ...props }, ref): ReactElement => {
    return (
      <section className="space-y-1">
        <fieldset className={FieldsetInputTWM({ color, disabled })}>
          <legend className={LegendInputTWM({ color, disabled })}>
            {label}
            {errorMessage && !disabled && <MdError className="text-red-600" />}
          </legend>

          <div className="flex items-center justify-center">
            <input
              className={`w-full rounded-sm bg-transparent px-1 outline-none disabled:cursor-not-allowed ${disabled ? "text-gray-400" : ""}`}
              disabled={disabled}
              ref={ref}
              {...props}
            />

            {icon && (
              <Button className="pr-1" color={color} disabled={disabled} onClick={iconOnClick} size="sm" type="button" variant="ghost">
                {icon}
              </Button>
            )}
          </div>
        </fieldset>

        {errorMessage && !disabled && <span className="ml-1 text-xs font-semibold text-red-600">{errorMessage}</span>}
      </section>
    );
  },
);

Input.displayName = "Input";
