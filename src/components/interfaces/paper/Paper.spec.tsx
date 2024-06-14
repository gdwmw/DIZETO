import { render } from "@testing-library/react";

import { ContainerPaper, ContentPaper } from "./";

const component = (
  <ContainerPaper className="testing-class" id="testing-id" style={{ color: "#ff0000" }}>
    <ContentPaper className="testing-class" id="testing-id" style={{ color: "#ff0000" }}>
      <p>This is testing text</p>
    </ContentPaper>
  </ContainerPaper>
);

describe("Paper Component Testing", () => {
  it("Should have a id", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("container-paper")).toHaveAttribute("id", "testing-id");
    expect(getByTestId("content-paper")).toHaveAttribute("id", "testing-id");
  });

  it("Should have text", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("container-paper")).toHaveTextContent("This is testing text");
  });

  it("Should have a class name testing-class", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("container-paper")).toHaveClass("testing-class");
    expect(getByTestId("content-paper")).toHaveClass("testing-class");
  });

  it("Should have a style attribute with value color: #ff0000", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("container-paper")).toHaveStyle("color: #ff0000");
    expect(getByTestId("content-paper")).toHaveStyle("color: #ff0000");
  });
});
