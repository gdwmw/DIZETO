"use client";

import { DetailedHTMLProps, FC, forwardRef, ReactElement, SelectHTMLAttributes } from "react";

import { twm } from "@/src/libs/tailwind-merge";

import { ErrorMessage, InputsContainer, Label } from "../elements";

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

const SelectTWM = ({ className, disabled }: TSelect) =>
  twm("w-full rounded-sm bg-transparent px-1 outline-none disabled:cursor-not-allowed", disabled && "text-gray-400", className);

export const Select: FC<TSelect> = forwardRef<HTMLSelectElement, TSelect>(
  ({ className, color, containerClassName, disabled, errorMessage, fieldsetClassName, label, legendClassName, ...props }, ref): ReactElement => (
    <InputsContainer className={containerClassName}>
      <Label
        color={color}
        disabled={disabled}
        errorMessage={errorMessage}
        fieldsetClassName={fieldsetClassName}
        label={label}
        legendClassName={legendClassName}
      >
        <select className={SelectTWM({ className, disabled })} disabled={disabled} ref={ref} {...props}>
          {props.children}
        </select>
      </Label>

      {errorMessage && !disabled && <ErrorMessage errorMessage={errorMessage} />}
    </InputsContainer>
  ),
);

Select.displayName = "Select";
