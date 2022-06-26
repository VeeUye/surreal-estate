import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert error", () => {
  //   const component = render(<Alert message="Error!" />);
  const validProps = {
    message: "Error!",
  };
  it("renders correctly", () => {
    const { asFragment } = render(<Alert message={validProps.message} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays an error when post is unsuccessful", () => {
    const { getByText } = render(<Alert message={validProps.message} />);

    expect(getByText(/Error/).textContent).toBe("Error!");
  });
});
