import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./input";
import { Label } from "./label";

const meta = {
  title: "Atoms/Label",
  component: Label,
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "0.5rem", width: "20rem" }}>
      <Label htmlFor="product-name">Nombre del producto</Label>
      <Input id="product-name" placeholder="Nerum Banking" />
    </div>
  ),
};
