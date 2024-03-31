import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../../components/Button/Button";

describe("Button", () => {
  test("renders a  button", () => {
    render(<Button />);
    const buttonElement = screen.getByTestId("submitButton");
    expect(buttonElement).toBeInTheDocument();
  });
});
