import { render, screen } from "@testing-library/react";
import ListGroup from "../../src/components/ListGroup";
import { userEvent } from "@testing-library/user-event";

describe("ListGroup", () => {
  it("should render properly with empty arr items", () => {
    render(
      <ListGroup
        heading={""}
        items={[]}
        onSelectItem={function (item: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(screen.findAllByDisplayValue("/No items/i")).toBeInTheDocument;
  });
  it("should render properly with items", () => {
    const items: string[] = ["Lada", "Kia", "BMW"];
    render(
      <ListGroup
        heading={""}
        items={items}
        onSelectItem={function (item: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(screen.findAllByDisplayValue(/Lada/i)).toBeInTheDocument;
    expect(screen.findAllByDisplayValue(/Kia/i)).toBeInTheDocument;
    expect(screen.findAllByDisplayValue(/BMW/i)).toBeInTheDocument;
  });

  it("should work correctly on click", async () => {
    const items: string[] = ["Lada", "Kia", "BMW"];
    let h: string = "Lada";
    render(
      <ListGroup
        heading={h}
        items={items}
        onSelectItem={function (item: string): void {
          h = item;
        }}
      />
    );

    let user = userEvent.setup();
    await user.click(screen.getByText("BMW"));

    expect(screen.getByText("BMW")).toHaveClass("active");
  });
});
