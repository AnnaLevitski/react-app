import {
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import App from "../../src/App";
import userEvent from "@testing-library/user-event";

describe("Input-Message", () => {
  it("should render properly", async () => {
    render(<App />);

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const user = userEvent.setup();

    expect(checkbox).toBeDisabled();
    expect(button).toBeDisabled();

    fireEvent.change(input, { target: { value: "test text" } });

    expect(checkbox).toBeEnabled();
    expect(button).toBeDisabled();

    user.click(checkbox);
    user.click(button);

    await waitFor(() => {
      expect(screen.getByText(/Holy/i)).toBeInTheDocument();
    });
  });

  it("should match snapshot", () => {
    const app = render(<App />);
    expect(app).toMatchSnapshot();
  });
});
