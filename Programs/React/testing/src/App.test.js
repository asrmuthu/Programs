import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Count", () => {
  test("h1", () => {
    render(<App />);
    expect(screen.getByText(/Count/i)).toBeInTheDocument();
  });

  test("Add", () => {
    render(<App />);
    fireEvent.click(screen.getByText("Add"));
    expect(screen.getByTestId("id1")).toHaveTextContent("1");
  });
});