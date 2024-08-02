"use client";

import { DetailedHTMLProps, FC, forwardRef, InputHTMLAttributes, ReactElement, ReactNode } from "react";

import { MdError } from "react-icons/md";

import { twm } from "@/src/libs/tailwind-merge";

import { Button } from "../../button";

/* eslint-disable perfectionist/sort-union-types */
type TInput = {
  className?: string;
  color?: "white" | "black";
  containerClassName?: string;
  disabled?: boolean;
  errorMessage?: string;
  fieldsetClassName?: string;
  icon?: ReactNode;
  iconOnClick?: () => void;
  label?: string;
  legendClassName?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
/* eslint-enable perfectionist/sort-union-types */

// TODO: Jangan lupa nanti lanjutin bikin Unit Testing dan Storybook untuk Input

const FieldsetInputTWM = ({ color, disabled, fieldsetClassName }: TInput) =>
  twm(
    "group overflow-hidden rounded-md border-2 px-1 pb-2",
    color === "white" && !disabled && "border-white text-white focus-within:border-red-600 dark:border-black dark:text-black",
    color === "black" && !disabled && "border-black text-black focus-within:border-red-600 dark:border-white dark:text-white",
    disabled && "border-gray-400",
    fieldsetClassName,
  );

const LegendInputTWM = ({ color, disabled, legendClassName }: TInput) =>
  twm(
    "ml-3 flex select-none items-center gap-1 whitespace-nowrap px-1 text-xs font-semibold",
    color === "white" && !disabled && "group-focus-within:text-red-600",
    color === "black" && !disabled && "group-focus-within:text-red-600",
    disabled && "text-gray-400",
    legendClassName,
  );

const InputTWM = ({ className, disabled }: TInput) =>
  twm("w-full rounded-sm bg-transparent px-1 outline-none disabled:cursor-not-allowed", disabled && "text-gray-400", className);

export const Input: FC<TInput> = forwardRef<HTMLInputElement, TInput>(
  (
    { className, color, containerClassName, disabled, errorMessage, fieldsetClassName, icon, iconOnClick, label, legendClassName, ...props },
    ref,
  ): ReactElement => (
    <section className={twm("space-y-1", containerClassName)}>
      <fieldset className={FieldsetInputTWM({ color, disabled, fieldsetClassName })}>
        <legend className={LegendInputTWM({ color, disabled, legendClassName })}>
          {label}
          {errorMessage && !disabled && <MdError className="text-red-600" />}
        </legend>

        <div className="flex items-center justify-center">
          <input className={InputTWM({ className, disabled })} disabled={disabled} ref={ref} {...props} />

          {icon && (
            <Button className="pr-1" color={color} disabled={disabled} onClick={iconOnClick} size="sm" type="button" variant="ghost">
              {icon}
            </Button>
          )}
        </div>
      </fieldset>

      {errorMessage && !disabled && <span className="ml-1 block text-xs font-semibold text-red-600">{errorMessage}</span>}
    </section>
  ),
);

Input.displayName = "Input";
