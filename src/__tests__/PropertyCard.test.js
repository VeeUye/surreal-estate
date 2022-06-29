import React from "react";
import { getByAltText, render, screen } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("Property Card", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<PropertyCard />);

    expect(asFragment()).toMatchSnapshot();
  });

  xit("displays a property title", () => {
    const { getByText } = render(<PropertyCard />);

    expect(getByText(/2 bed flat/i).textContent).toBe("2 bed flat");
  });

  xit("displays a property type", () => {
    const { getByText } = render(<PropertyCard />);

    expect(getByText(/Flat/).textContent).toBe("Flat");
  });

  xit("displays the correct number of baths", () => {
    const { getByText } = render(<PropertyCard />);

    expect(getByText(/bath/).textContent).toBe("2 bath");
  });

  xit("displays the correct number of beds", () => {
    const { getByText } = render(<PropertyCard />);

    expect(getByText(/bed/).textContent).toBe("2 bed");
  });

  xit("displays the correct price", () => {
    const { getByText } = render(<PropertyCard />);

    expect(getByText(/£/).textContent).toBe("£100000");
  });

  xit("displays the correct city", () => {
    const { getByText } = render(<PropertyCard />);

    expect(getByText(/Manchester/).textContent).toBe("Manchester");
  });

  xit("displays the correct number of beds", () => {
    const { getByText } = render(<PropertyCard />);

    expect(getByText(/bed/).textContent).toBe("2 bed");
  });

  xit("renders the email button", () => {
    render(<PropertyCard />);

    expect(screen.getByRole("button", { name: /email/ }));
  });

  it("displays an image", () => {
    render(<PropertyCard />);
    const image = screen.getByAltText(/interior of bedroom 2/i);

    expect(image).toBeVisible();
  });

  it("displays a logo", () => {
    render(<PropertyCard />);
    const image = screen.getByAltText(/Surreal Estate/i);

    expect(image).toBeVisible();
  });
});
