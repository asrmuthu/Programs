import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

// Correct mock of fetch
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, title: "qui est esse" },
        ]),
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test("App fetches and displays items", async () => {
  render(<App />);

  // Wait for the expected text to appear
  await waitFor(() => {
    expect(screen.getByText("qui est esse")).toBeInTheDocument();
  });
});
