import type { Meta, StoryObj } from "@storybook/react";
import ListGroup from "../components/ListGroup";

const meta: Meta<typeof ListGroup> = {
  component: ListGroup,
};

export default meta;
type Story = StoryObj<typeof ListGroup>;

const items = ["Neque", "Porro quisquam", "Est qui ", "Dolorem"];

export const Primary: Story = {
  args: {
    items: items,
    heading: "Lorem Ipsum",
  },
};
