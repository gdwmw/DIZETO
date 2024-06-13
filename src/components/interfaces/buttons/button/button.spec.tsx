import { fireEvent, render } from "@testing-library/react";
import { FaCrown } from "react-icons/fa";

import { Button } from "./";

/* eslint-disable perfectionist/sort-objects */
const classes = {};
/* eslint-enable perfectionist/sort-objects */

/* eslint-disable perfectionist/sort-union-types */
const disabled: boolean[] = [false, true];
/* eslint-enable perfectionist/sort-union-types */

const component = ({ disabled, onClickFn }: any) => (
  <Button className="testing-class" disabled={disabled} id="testing-id" onClick={onClickFn} style={{ color: "#ff0000" }} type="button">
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
});
