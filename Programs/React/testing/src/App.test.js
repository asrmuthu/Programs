import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

  test("count", () => {
  render(<App />);
  expect(screen.getByText(/count 0/i)).toBeInTheDocument(); // initial state
  fireEvent.click(screen.getByText("Add")); // click the button
  expect(screen.getByText(/count 1/i)).toBeInTheDocument(); // updated state
});
