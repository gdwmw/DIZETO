import { render } from "@testing-library/react";

import { Title } from "./";

/* eslint-disable tailwindcss/no-custom-classname */
const component = <Title className="testing-class" id="testing-id" style={{ color: "#ff0000" }} title="This is " titleRed="testing text" />;
/* eslint-enable tailwindcss/no-custom-classname */

describe("ExampleB Component Testing", () => {
  it("Should have a id", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("title")).toHaveAttribute("id", "testing-id");
  });

  it("Should have text", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("title")).toHaveTextContent("This is testing text");
  });

  it("Should have a class name testing-class", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("title")).toHaveClass("testing-class");
  });

  it("Should have a style attribute with value color: #ff0000", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("title")).toHaveStyle("color: #ff0000");
  });
});
