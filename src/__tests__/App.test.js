import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../components/App";

test("renders correctly", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const placeholder = screen.getByText(/Properties Page/i);
  expect(placeholder).toBeInTheDocument();
});
