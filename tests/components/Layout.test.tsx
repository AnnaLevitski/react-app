import { render, screen } from "@testing-library/react";
import Layout from "../../src/components/Layout";

describe("Layout", () => {
  it("should render properly with isRow false", () => {
    render(<Layout isRow={false} children={"OK"} />);
    const layout = screen.getByText("OK");
    expect(layout).toHaveClass("col-8");
  });
  it("should render properly with isRow true", () => {
    render(<Layout isRow={true} children={"OK"} />);
    const layout = screen.getByText("OK");
    expect(layout).toHaveClass("row");
  });
});
