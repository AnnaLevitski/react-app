import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../../src/components/Button";

describe("Button", () => {
  it("should render button", () => {
    render(
      <Button
        children={"Ok"}
        isDisabled={false}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument;
    expect(button).toHaveTextContent("Ok");
    expect(button).not.toBeDisabled;
  });

  it("should render button disabled true", () => {
    render(
      <Button
        children={"Ok"}
        isDisabled={true}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument;
    expect(button).toBeDisabled;
  });

  it("should do the click event on click", async () => {
    const clickGet = vitest.fn();
    render(<Button children={""} isDisabled={false} onClick={clickGet} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument;

    let user = userEvent.setup();
    await user.click(button);
    expect(clickGet).toHaveBeenCalled();
  });
});
