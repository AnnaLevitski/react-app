import { render, screen } from "@testing-library/react";
import Placeholder from "../../src/components/Placeholder";

describe("Placeholder", () => {
  it("should render properly", () => {
    render(<Placeholder heading={"Ok"} isShown={true} />);
    const placeholder = screen.getByText(/placeholder/i);
    expect(placeholder).toHaveTextContent(/Ok/i);
  });
  it("should not be in dom if isShown is false", () => {
    render(<Placeholder heading={"Ok"} isShown={false} />);
    const placeholder = screen.queryByText(/placeholder/i);
    expect(placeholder).not.toBeInTheDocument();
  });
});
