import type { Meta, StoryObj } from "@storybook/react";
import { Plus } from "lucide-react";

import { Button } from "../atoms/button";
import { MetricCard } from "../cells/metric-card";
import { AppShell } from "./app-shell";

const meta = {
  title: "Organisms/AppShell",
  component: AppShell,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof AppShell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
  },
  render: () => (
    <AppShell
      actions={
        <Button>
          <Plus size={16} /> Nuevo producto
        </Button>
      }
      navItems={[
        { active: true, href: "#overview", label: "Overview" },
        { href: "#tokens", label: "Tokens" },
        { href: "#components", label: "Componentes" },
      ]}
      title={
        <div>
          <strong>Design System</strong>
          <p style={{ color: "var(--nds-muted-foreground)", margin: "0.25rem 0 0" }}>
            Base compartida para productos Nerum.
          </p>
        </div>
      }
    >
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
        }}
      >
        <MetricCard label="Componentes" status="Alpha" value="12" />
        <MetricCard label="Cobertura stories" status="Live" statusVariant="success" value="100%" />
        <MetricCard label="Productos objetivo" status="Q1" statusVariant="warning" value="6" />
      </div>
    </AppShell>
  ),
};
