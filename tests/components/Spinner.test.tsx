import { render, screen } from "@testing-library/react";
import Spinner from "../../src/components/Spinner";

describe("Spinner", () => {
  it("should render properly", () => {
    render(<Spinner />);
    const spinner = screen.getByText(/Loading/i);
    expect(spinner).toBeInTheDocument();
  });
});
