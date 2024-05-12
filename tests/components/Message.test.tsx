import { getByText, render, screen, waitFor } from "@testing-library/react";
import Messages from "../../src/components/Messages";

describe("Message", () => {
  it("should render properly ", async () => {
    const { container } = render(<Messages />);

    await waitFor(
      () => {
        expect(screen.getByText(/test_text@gmail.com/i)).toBeInTheDocument();
        expect(screen.getByText(/test text/i)).toBeInTheDocument();
        expect(screen.getByText(/random text/i)).toBeInTheDocument();
        expect(screen.getByText(/r@gmail.com/i)).toBeInTheDocument();
      },
      { timeout: 4500 }
    );
  });
});
