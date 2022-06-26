import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  const validProps = {
    alertFail: {
      message: "Error!",
    },
    alertSuccess: {
      message: "Success!",
    },
    alertNull: {
      message: "",
    },
  };

  it("does not render if message props is empty", () => {
    const { asFragment } = render(
      <Alert message={validProps.alertFail.message} />
    );
    const alert = asFragment();

    expect(alert).toMatchSnapshot();
  });

  it("renders correctly when an error occurs", () => {
    const { asFragment } = render(
      <Alert message={validProps.alertFail.message} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays an error message", () => {
    const { getByText } = render(
      <Alert message={validProps.alertFail.message} />
    );

    expect(getByText(/Error/).textContent).toBe("Error!");
  });

  it("renders correctly when successful", () => {
    const { asFragment } = render(
      <Alert message={validProps.alertSuccess.message} success />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays a success message", () => {
    const { getByText } = render(
      <Alert message={validProps.alertSuccess.message} />
    );

    expect(getByText(/Success/).textContent).toBe("Success!");
  });
});
