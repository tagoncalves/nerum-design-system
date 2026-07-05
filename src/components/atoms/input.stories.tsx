import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./input";

const meta = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "workspace@nerum.io",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "No editable",
  },
};
