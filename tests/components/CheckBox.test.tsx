import { render, screen } from "@testing-library/react";
import CheckBox from "../../src/components/CheckBox";
import userEvent from "@testing-library/user-event";
describe("CheckBox", () => {
  it("should render disabled", () => {
    render(
      <CheckBox
        onChange={function (): void {
          throw new Error("Function not implemented.");
        }}
        disabled={true}
      />
    );
    const checkBox = screen.getByRole("checkbox");
    expect(checkBox).toBeDisabled;
  });
  it("should render enabled", () => {
    render(
      <CheckBox
        onChange={function (): void {
          throw new Error("Function not implemented.");
        }}
        disabled={false}
      />
    );
    const checkBox = screen.getByRole("checkbox");
    expect(checkBox).toBeEnabled;
  });
  it("should be checked after click", async () => {
    render(<CheckBox onChange={function (): void {}} disabled={false} />);
    const checkBox = screen.getByRole("checkbox");
    expect(checkBox).not.toBeChecked;

    let user = userEvent.setup();
    await user.click(checkBox);

    expect(checkBox).toBeChecked;
  });
});
