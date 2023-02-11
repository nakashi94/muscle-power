/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { Header } from "../components/layouts/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("should render GoriGori text", () => {
    render(<Header />);

    const heading = screen.getByText("GoriGori");

    expect(heading).toBeInTheDocument();
  });
});
