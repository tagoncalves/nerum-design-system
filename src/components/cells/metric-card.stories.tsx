import type { Meta, StoryObj } from "@storybook/react";

import { MetricCard } from "./metric-card";

const meta = {
  title: "Cells/MetricCard",
  component: MetricCard,
  tags: ["autodocs"],
  args: {
    description: "Uso consolidado en productos activos.",
    label: "Adopción DS",
    status: "Live",
    statusVariant: "success",
    trend: "+18% respecto al sprint anterior",
    value: "84%",
  },
} satisfies Meta<typeof MetricCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
