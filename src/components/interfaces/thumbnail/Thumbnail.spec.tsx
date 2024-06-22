import { fireEvent, render } from "@testing-library/react";

import { Thumbnail } from "./";

/* eslint-disable tailwindcss/no-custom-classname */
const component = ({ setImageIndex, setOpenImageDetail }: any) => (
  <Thumbnail
    className="testing-class"
    id="testing-id"
    setImageIndex={setImageIndex}
    setOpenImageDetail={setOpenImageDetail}
    src="/assets/images/highlight/thumbnail/DZT_CC1.webp"
    style={{ color: "#ff0000" }}
  />
);
/* eslint-enable tailwindcss/no-custom-classname */

describe("ExampleB Component Testing", () => {
  it("Should have a id", () => {
    const { getByTestId } = render(component({}));
    expect(getByTestId("thumbnail")).toHaveAttribute("id", "testing-id");
  });

  it("Should have a class name testing-class", () => {
    const { getByTestId } = render(component({}));
    expect(getByTestId("thumbnail")).toHaveClass("testing-class");
  });

  it("Should have a style attribute with value color: #ff0000", () => {
    const { getByTestId } = render(component({}));
    expect(getByTestId("thumbnail")).toHaveStyle("color: #ff0000");
  });

  it("Should call setImageIndex and setOpenImageDetail on click", () => {
    const setImageIndex = jest.fn();
    const setOpenImageDetail = jest.fn();
    const { getByTestId } = render(component({ setImageIndex, setOpenImageDetail }));
    fireEvent.click(getByTestId("thumbnail"));
    expect(setImageIndex).toHaveBeenCalled();
    expect(setOpenImageDetail).toHaveBeenCalledWith(true);
  });
});
