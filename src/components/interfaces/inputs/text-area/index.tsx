import { DetailedHTMLProps, FC, forwardRef, ReactElement, TextareaHTMLAttributes } from "react";

import { MdError } from "react-icons/md";

import { twm } from "@/src/libs/tailwind-merge";

/* eslint-disable perfectionist/sort-union-types */
type TTextArea = {
  className?: string;
  color?: "white" | "black";
  disabled?: boolean;
  errorMessage?: string;
  label?: string;
  rows?: number;
} & DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
/* eslint-enable perfectionist/sort-union-types */

// TODO: Jangan lupa nanti lanjutin bikin Unit Testing dan Storybook untuk TextArea

const FieldsetTextAreaTWM = ({ color, disabled }: TTextArea) =>
  twm(
    "group overflow-hidden rounded-md border-2 px-1 pb-2",
    color === "white" && !disabled && "border-white text-white focus-within:border-red-600 dark:border-black dark:text-black",
    color === "black" && !disabled && "border-black text-black focus-within:border-red-600 dark:border-white dark:text-white",
    disabled && "border-gray-400",
  );

const LegendTextAreaTWM = ({ color, disabled }: TTextArea) =>
  twm(
    "ml-3 flex select-none items-center gap-1 whitespace-nowrap px-1 text-xs font-semibold",
    color === "white" && !disabled && "group-focus-within:text-red-600",
    color === "black" && !disabled && "group-focus-within:text-red-600",
    disabled && "text-gray-400",
  );

const TextAreaTWM = ({ className, disabled }: TTextArea) =>
  twm(
    "max-h-[200px] min-h-[120px] w-full rounded-sm bg-transparent px-1 outline-none disabled:cursor-not-allowed",
    disabled && "text-gray-400",
    className,
  );

export const TextArea: FC<TTextArea> = forwardRef<HTMLTextAreaElement, TTextArea>(
  ({ className, color, disabled, errorMessage, label, rows, ...props }, ref): ReactElement => (
    <section className="space-y-1">
      <fieldset className={FieldsetTextAreaTWM({ color, disabled })}>
        <legend className={LegendTextAreaTWM({ color, disabled })}>
          {label}
          {errorMessage && !disabled && <MdError className="text-red-600" />}
        </legend>

        <textarea className={TextAreaTWM({ className, disabled })} disabled={disabled} ref={ref} rows={rows ?? 5} {...props} />
      </fieldset>

      {errorMessage && !disabled && <span className="ml-1 block text-xs font-semibold text-red-600">{errorMessage}</span>}
    </section>
  ),
);

TextArea.displayName = "TextArea";
