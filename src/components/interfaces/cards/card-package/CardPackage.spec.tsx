import { render, screen } from "@testing-library/react";

import { CardPackage } from "./";

const PRICING_DATA = {
  category: "EXAMPLE\nTEXT",
  id: "1",
  listItem: [
    {
      id: "1",
      list: [
        { label: "EXAMPLE TEXT", qty: 1 },
        { label: "EXAMPLE TEXT", qty: 1 },
        { label: "EXAMPLE TEXT", qty: 1 },
        { label: "EXAMPLE TEXT", qty: 1 },
        { label: "EXAMPLE TEXT", qty: 1 },
        { label: "EXAMPLE TEXT", qty: 1 },
      ],
      pricingId: "1",
    },
  ],
  pack: "A",
  price: "1.0",
};

const component = <CardPackage {...PRICING_DATA} />;

describe("CardPackage Component Testing", () => {
  it("should render the price correctly", () => {
    render(component);
    const priceElement = screen.getByTestId("price");
    expect(priceElement).toHaveTextContent("IDR 1.0");
  });

  it("should render the package correctly", () => {
    render(component);
    const packElement = screen.getByTestId("pack");
    expect(packElement).toHaveTextContent("PACKAGE A");
  });

  it("should render the category correctly", () => {
    render(component);
    const categoryElement = screen.getByTestId("category");
    expect(categoryElement).toHaveTextContent("EXAMPLE TEXT");
  });

  it("should render the list items correctly", () => {
    render(component);
    const listItemElements = screen.getAllByTestId("label");
    expect(listItemElements).toHaveLength(6);
    listItemElements.forEach((item) => {
      expect(item).toHaveTextContent("EXAMPLE TEXT");
    });
  });

  it("should render the quantity correctly", () => {
    render(component);
    const qtyElements = screen.getAllByTestId("qty");
    expect(qtyElements).toHaveLength(6);
    qtyElements.forEach((qty) => {
      expect(qty).toHaveTextContent("1");
    });
  });
});
