import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Counter App", () => {
  test("Heading", () => {
    render(<App />);
    expect(screen.getByText(/Counter/i)).toBeInTheDocument();
  });

  test("Add", () => {
    render(<App />);
    fireEvent.click(screen.getByText("Add"));
    expect(screen.getByTestId("count")).toHaveTextContent("1");
  });
});