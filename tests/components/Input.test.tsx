import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../../src/components/Input";
import userEvent from "@testing-library/user-event";

describe("Input", () => {
  it("should render properly", () => {
    render(
      <Input
        onChange={function (val: string): string {
          return val;
        }}
        value={""}
      />
    );
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument;
  });
  it("should be able to type and change value", async () => {
    let temp: string = "";
    render(
      <Input
        onChange={function (val: string): string {
          return val;
        }}
        value={temp}
      />
    );
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("");

    input.value = "Test";

    expect(input).toHaveValue("Test");
    expect(screen.getByDisplayValue("Test")).toHaveClass("form-control");
  });
});
