import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("Property Card", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<PropertyCard />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays a property title", () => {
    const { getByText } = render(<PropertyCard />);

    expect(getByText(/2 bed flat/i).textContent).toBe("2 bed flat");
  });

  it("displays a property type", () => {
    const { getByText } = render(<PropertyCard />);

    expect(getByText(/Flat/).textContent).toBe("Flat");
  });

  it("displays the correct number of baths", () => {
    const { getByText } = render(<PropertyCard />);

    expect(getByText(/bath/).textContent).toBe("2 bath");
  });

  it("displays the correct number of beds", () => {
    const { getByText } = render(<PropertyCard />);

    expect(getByText(/bed/).textContent).toBe("2 bed");
  });

  it("displays the correct price", () => {
    const { getByText } = render(<PropertyCard />);

    expect(getByText(/£/).textContent).toBe("£100000");
  });

  it("displays the correct city", () => {
    const { getByText } = render(<PropertyCard />);

    expect(getByText(/Manchester/).textContent).toBe("Manchester");
  });

  it("displays the correct number of beds", () => {
    const { getByText } = render(<PropertyCard />);

    expect(getByText(/bed/).textContent).toBe("2 bed");
  });

  it("renders the email button", () => {
    render(<PropertyCard />);

    expect(screen.getByRole("button", { name: /email/ }));
  });
});
