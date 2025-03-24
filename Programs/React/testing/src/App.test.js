import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Heading", () => {
  render(<App />);
  const h1 = screen.getByText(/Counter APP/i);
  expect(h1).toBeInTheDocument();
});

test("increments count", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByTestId("count")).toHaveTextContent("1");
});

test("initial count is 0", () => {
  render(<App />);
  expect(screen.getByTestId("count")).toHaveTextContent("0");
});
