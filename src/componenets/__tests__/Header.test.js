import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Header from "../Header";
import "@testing-library/jest-dom";

test("Header renders correctly", () => {
  render(<Header />);

  const headerEl = screen.getByText(/Sisal/i);
  expect(headerEl).toHaveTextContent("Sisal");
  screen.debug();
});
