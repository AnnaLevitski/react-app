import type { Meta, StoryObj } from "@storybook/react";
import CheckBoxes from "../components/CheckBox";

const meta: Meta<typeof CheckBoxes> = {
  component: CheckBoxes,
};

export default meta;
type Story = StoryObj<typeof CheckBoxes>;

export const Primary: Story = {
  args: {
    isCheckbox: false,
  },
};
export const Disable: Story = {
  args: {
    isCheckbox: true,
  },
};
