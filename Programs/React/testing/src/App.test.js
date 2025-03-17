import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("initial count is 0", () => {
  render(<App />);
  expect(screen.getByTestId("count")).toHaveTextContent("0");
});

test("increments count", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Increment"));
  expect(screen.getByTestId("count")).toHaveTextContent("1");
});

test("decrements count", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Decrement"));
  expect(screen.getByTestId("count")).toHaveTextContent("-1");
});
