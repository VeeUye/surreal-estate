import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert error", () => {
  const validProps = {
    message: "Error!",
  };
  it("renders correctly", () => {
    const { asFragment } = render(<Alert message={validProps.message} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays an error when post is unsuccessful", () => {
    const errorMessage = screen.getByText(/Error/i);
    render(<Alert message={validProps.message} />);

    expect(errorMessage).toBeInTheDocument();
  });
});
