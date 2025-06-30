import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {title: "qui est esse" },
        ]),
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test("API", async () => {
  render(<App />);

  await waitFor(() => {
    expect(screen.getByText("qui est esse")).toBeInTheDocument();
  });
});
