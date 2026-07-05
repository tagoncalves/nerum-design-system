import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight, Plus } from "lucide-react";

import { Button } from "./button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
    },
  },
  args: {
    children: "Crear producto",
    size: "md",
    variant: "primary",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Nuevo espacio
        <ArrowRight size={16} />
      </>
    ),
  },
};

export const IconOnly: Story = {
  args: {
    "aria-label": "Agregar",
    children: <Plus size={18} />,
    size: "icon",
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};
