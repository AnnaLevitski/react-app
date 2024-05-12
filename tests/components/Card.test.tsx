import { render, screen } from "@testing-library/react";
import Card from "../../src/components/Card";
import userEvent from "@testing-library/user-event";

describe("Card", () => {
  it("should render properly ", () => {
    render(
      <Card
        children={"ok google"}
        closeClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const card = screen.getByText("ok google");
    expect(card).toBeInTheDocument();
  });
});
