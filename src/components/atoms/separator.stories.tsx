import type { Meta, StoryObj } from "@storybook/react";

import { Separator } from "./separator";

const meta = {
  title: "Atoms/Separator",
  component: Separator,
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: "24rem" }}>
      <p>Balance</p>
      <Separator />
      <p>Movimientos recientes</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ alignItems: "center", display: "flex", gap: "1rem", height: "3rem" }}>
      <span>Core</span>
      <Separator orientation="vertical" />
      <span>Payments</span>
    </div>
  ),
};
