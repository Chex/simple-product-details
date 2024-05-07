import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  window.alert = jest.fn();
});

afterAll(() => {
  window.alert.mockRestore();
});

test("select a size", async () => {
  render(<App />);

  const cartButton = await screen.findByText("ADD TO CART");

  fireEvent.click(cartButton);

  expect(window.alert).toHaveBeenCalledTimes(1);
});
