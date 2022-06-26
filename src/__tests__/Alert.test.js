import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert error", () => {
  const validProps = {
    message: "Error!",
  };
  it("renders correctly", () => {
    const { asFragment } = render(<Alert message={validProps.message} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays an error message", () => {
    const { getByText } = render(<Alert message={validProps.message} />);

    expect(getByText(/Error/).textContent).toBe("Error!");
  });
});

describe("Alert success", () => {
  const validProps = {
    message: "Success!",
  };
  it("renders correctly", () => {
    const { asFragment } = render(
      <Alert message={validProps.message} success />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays a success message", () => {
    const { getByText } = render(<Alert message={validProps.message} />);

    expect(getByText(/Success/).textContent).toBe("Success!");
  });
});
