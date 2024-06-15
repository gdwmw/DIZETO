import { fireEvent, render } from "@testing-library/react";
import { FaCrown } from "react-icons/fa";

import { Button } from "./";

/* eslint-disable perfectionist/sort-objects */
const classes = {
  default: "flex items-center gap-2",
  base: {
    a: "justify-center rounded-md",
    b: "active:scale-95",
    c: "cursor-not-allowed",
  },
  solid: {
    red: "bg-red-600 text-white hover:bg-red-700 hover:ring-1 hover:ring-red-800 active:bg-red-800",
    white:
      "bg-white text-black hover:bg-red-700 hover:text-white hover:ring-1 hover:ring-red-800 active:bg-red-800 active:text-white dark:bg-black dark:text-white",
    black:
      "bg-black text-white hover:bg-red-700 hover:ring-1 hover:ring-red-800 active:bg-red-800 dark:bg-white dark:text-black dark:hover:text-white dark:active:text-white",
    disabled: "bg-gray-400 text-white",
  },
  outline: {
    red: "bg-transparent text-red-600 ring-1 ring-red-600 hover:bg-red-700 hover:text-white hover:ring-red-800 active:bg-red-800",
    white:
      "bg-transparent text-white ring-1 ring-white hover:bg-red-700 hover:text-white hover:ring-red-800 active:bg-red-800 dark:text-black dark:ring-black",
    black:
      "bg-transparent text-black ring-1 ring-black hover:bg-red-700 hover:text-white hover:ring-red-800 active:bg-red-800 dark:text-white dark:ring-white",
    disabled: "bg-transparent text-gray-400 ring-1 ring-gray-400",
  },
  ghost: {
    red: "text-red-600 hover:text-red-700 active:text-red-800",
    white: "text-white hover:text-red-700 active:text-red-800 dark:text-black",
    black: "text-black hover:text-red-700 active:text-red-800 dark:text-white",
    disabled: "text-gray-400",
  },
  size: {
    sm: "h-10 min-w-28 px-3 text-base",
    md: "h-11 min-w-32 px-4 text-lg",
    lg: "h-12 min-w-36 px-5 text-xl",
  },
  ghostSize: {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
  },
};
/* eslint-enable perfectionist/sort-objects */

/* eslint-disable perfectionist/sort-union-types */
const variants: ("solid" | "outline" | "ghost")[] = ["solid", "outline", "ghost"];
const colors: ("red" | "white" | "black")[] = ["red", "white", "black"];
const sizes: ("sm" | "md" | "lg")[] = ["sm", "md", "lg"];
const ghostSizes: ("sm" | "md" | "lg")[] = ["sm", "md", "lg"];
const disabled: boolean[] = [false, true];
/* eslint-enable perfectionist/sort-union-types */

const component = ({ color, disabled, onClickFn, size, variant }: any) => (
  <Button
    className="testing-class"
    color={color}
    disabled={disabled}
    id="testing-id"
    onClick={onClickFn}
    size={size}
    style={{ color: "#ff0000" }}
    type="button"
    variant={variant}
  >
    <FaCrown data-testid="testing-icon" />
    This is testing text
  </Button>
);

describe("Button Component Testing", () => {
  it("Should have a id", () => {
    const { getByTestId } = render(component({}));
    expect(getByTestId("button")).toHaveAttribute("id", "testing-id");
  });

  it("Should have text", () => {
    const { getByTestId } = render(component({}));
    expect(getByTestId("button")).toHaveTextContent("This is testing text");
  });

  it("Should have a class name testing-class", () => {
    const { getByTestId } = render(component({}));
    expect(getByTestId("button")).toHaveClass("testing-class");
  });

  it("Should have a style attribute with value color: #ff0000", () => {
    const { getByTestId } = render(component({}));
    expect(getByTestId("button")).toHaveStyle("color: #ff0000");
  });

  it("Should have an icon", () => {
    const { getByTestId } = render(component({}));
    expect(getByTestId("testing-icon")).toBeInTheDocument();
  });

  it("Should have a type", () => {
    const { getByTestId } = render(component({}));
    expect(getByTestId("button")).toHaveAttribute("type", "button");
  });

  disabled.forEach((disabled) => {
    it(`Should ${!disabled ? "can" : "cannot"} interact when the button is ${!disabled ? "enabled" : "disabled"}`, () => {
      const onClickFn = jest.fn();
      const { getByTestId } = render(component({ disabled, onClickFn }));
      fireEvent.click(getByTestId("button"));
      !disabled ? expect(onClickFn).toHaveBeenCalled() : expect(onClickFn).not.toHaveBeenCalled();
    });
  });

  variants.forEach((variant) => {
    colors.forEach((color) => {
      sizes.forEach((size) => {
        ghostSizes.forEach((ghostSize) => {
          disabled.forEach((disabled) => {
            it(`Should have Variant: ${variant}, Color: ${color}, ${size === "lg" && variant !== "ghost" ? "Size: " + size : " Ghost Size: " + ghostSize} correctly`, () => {
              const { getByTestId } = render(component({ color, disabled, size, variant }));

              // ⭐ === DEFAULT === ⭐
              expect(getByTestId("button")).toHaveClass(classes.default);

              // ⭐ === BASE === ⭐
              variant !== "ghost"
                ? expect(getByTestId("button")).toHaveClass(classes.base.a)
                : expect(getByTestId("button")).not.toHaveClass(classes.base.a);

              !disabled ? expect(getByTestId("button")).toHaveClass(classes.base.b) : expect(getByTestId("button")).not.toHaveClass(classes.base.b);

              !disabled ? expect(getByTestId("button")).not.toHaveClass(classes.base.c) : expect(getByTestId("button")).toHaveClass(classes.base.c);

              // ⭐ === SOLID === ⭐
              variant === "solid" && color === "red" && !disabled
                ? expect(getByTestId("button")).toHaveClass(classes.solid.red)
                : expect(getByTestId("button")).not.toHaveClass(classes.solid.red);

              variant === "solid" && color === "white" && !disabled
                ? expect(getByTestId("button")).toHaveClass(classes.solid.white)
                : expect(getByTestId("button")).not.toHaveClass(classes.solid.white);

              variant === "solid" && color === "black" && !disabled
                ? expect(getByTestId("button")).toHaveClass(classes.solid.black)
                : expect(getByTestId("button")).not.toHaveClass(classes.solid.black);

              variant === "solid" && disabled
                ? expect(getByTestId("button")).toHaveClass(classes.solid.disabled)
                : expect(getByTestId("button")).not.toHaveClass(classes.solid.disabled);

              // ⭐ === OUTLINE === ⭐
              variant === "outline" && color === "red" && !disabled
                ? expect(getByTestId("button")).toHaveClass(classes.outline.red)
                : expect(getByTestId("button")).not.toHaveClass(classes.outline.red);

              variant === "outline" && color === "white" && !disabled
                ? expect(getByTestId("button")).toHaveClass(classes.outline.white)
                : expect(getByTestId("button")).not.toHaveClass(classes.outline.white);

              variant === "outline" && color === "black" && !disabled
                ? expect(getByTestId("button")).toHaveClass(classes.outline.black)
                : expect(getByTestId("button")).not.toHaveClass(classes.outline.black);

              variant === "outline" && disabled
                ? expect(getByTestId("button")).toHaveClass(classes.outline.disabled)
                : expect(getByTestId("button")).not.toHaveClass(classes.outline.disabled);

              // ⭐ === GHOST === ⭐
              variant === "ghost" && color === "red" && !disabled
                ? expect(getByTestId("button")).toHaveClass(classes.ghost.red)
                : expect(getByTestId("button")).not.toHaveClass(classes.ghost.red);

              variant === "ghost" && color === "white" && !disabled
                ? expect(getByTestId("button")).toHaveClass(classes.ghost.white)
                : expect(getByTestId("button")).not.toHaveClass(classes.ghost.white);

              variant === "ghost" && color === "black" && !disabled
                ? expect(getByTestId("button")).toHaveClass(classes.ghost.black)
                : expect(getByTestId("button")).not.toHaveClass(classes.ghost.black);

              variant === "ghost" && disabled && expect(getByTestId("button")).toHaveClass(classes.ghost.disabled);

              // ⭐ === SIZE === ⭐
              size === "sm" && variant !== "ghost"
                ? expect(getByTestId("button")).toHaveClass(classes.size.sm)
                : expect(getByTestId("button")).not.toHaveClass(classes.size.sm);

              size === "md" && variant !== "ghost"
                ? expect(getByTestId("button")).toHaveClass(classes.size.md)
                : expect(getByTestId("button")).not.toHaveClass(classes.size.md);

              size === "lg" && variant !== "ghost"
                ? expect(getByTestId("button")).toHaveClass(classes.size.lg)
                : expect(getByTestId("button")).not.toHaveClass(classes.size.lg);

              // ⭐ === GHOST SIZE === ⭐
              size === "sm" && variant === "ghost" && expect(getByTestId("button")).toHaveClass(classes.ghostSize.sm);

              size === "md" && variant === "ghost" && expect(getByTestId("button")).toHaveClass(classes.ghostSize.md);

              size === "lg" && variant === "ghost" && expect(getByTestId("button")).toHaveClass(classes.ghostSize.lg);
            });
          });
        });
      });
    });
  });
});
