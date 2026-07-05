import type { Meta, StoryObj } from "@storybook/react";

import { Field } from "./field";

const meta = {
  title: "Cells/Field",
  component: Field,
  tags: ["autodocs"],
  args: {
    description: "Este nombre aparece en el selector de producto.",
    label: "Nombre del producto",
    placeholder: "Nerum Wallet",
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    error: "El nombre debe tener al menos 3 caracteres.",
  },
};
