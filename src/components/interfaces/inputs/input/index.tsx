"use client";

import { DetailedHTMLProps, FC, forwardRef, InputHTMLAttributes, ReactElement, ReactNode } from "react";

import { twm } from "@/src/libs/tailwind-merge";

import { Button } from "../../button";
import { ErrorMessage, InputsContainer, Label } from "../elements";

/* eslint-disable perfectionist/sort-union-types */
type TInput = {
  className?: string;
  color?: "white" | "black";
  containerClassName?: string;
  disabled?: boolean;
  errorMessage?: string;
  fieldsetClassName?: string;
  icon?: ReactNode;
  iconClassName?: string;
  iconOnClick?: () => void;
  label?: string;
  legendClassName?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
/* eslint-enable perfectionist/sort-union-types */

// TODO: Jangan lupa nanti lanjutin bikin Unit Testing dan Storybook untuk Input

const InputTWM = ({ className, disabled }: TInput) =>
  twm("w-full rounded-sm bg-transparent px-1 outline-none disabled:cursor-not-allowed", disabled && "text-gray-400", className);

const iconTWM = ({ iconClassName }: TInput) => twm("pr-1", iconClassName);

export const Input: FC<TInput> = forwardRef<HTMLInputElement, TInput>(
  (
    {
      className,
      color,
      containerClassName,
      disabled,
      errorMessage,
      fieldsetClassName,
      icon,
      iconClassName,
      iconOnClick,
      label,
      legendClassName,
      ...props
    },
    ref,
  ): ReactElement => (
    <InputsContainer className={containerClassName}>
      <Label
        color={color}
        disabled={disabled}
        errorMessage={errorMessage}
        fieldsetClassName={fieldsetClassName}
        label={label}
        legendClassName={legendClassName}
      >
        <input className={InputTWM({ className, disabled })} disabled={disabled} ref={ref} {...props} />

        {icon && (
          <Button
            className={iconTWM({ iconClassName })}
            color={color}
            disabled={disabled}
            onClick={iconOnClick}
            size="sm"
            type="button"
            variant="ghost"
          >
            {icon}
          </Button>
        )}
      </Label>

      {errorMessage && !disabled && <ErrorMessage errorMessage={errorMessage} />}
    </InputsContainer>
  ),
);

Input.displayName = "Input";
