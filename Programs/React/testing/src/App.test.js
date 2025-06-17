// import { render, screen, fireEvent } from "@testing-library/react";
// import App from "./App";

//   test("count", () => {
//   render(<App />);
//   expect(screen.getByText(/count 0/i)).toBeInTheDocument(); // initial state
//   fireEvent.click(screen.getByText("Add")); // click the button
//   expect(screen.getByText(/count 1/i)).toBeInTheDocument(); // updated state
// });

import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({json: () =>
        Promise.resolve({
          products: [
            { id: 1, title: "Product A" },
          ],
        }),
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test("API", async () => {
  render(<App />);

  await waitFor(() => {
    expect(screen.getByText("Product A")).toBeInTheDocument();
  });
});