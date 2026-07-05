import type { Meta, StoryObj } from "@storybook/react";
import { Sparkles } from "lucide-react";

import { Button } from "../atoms/button";
import { EmptyState } from "./empty-state";

const meta = {
  title: "Organisms/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  args: {
    description:
      "Usa esta superficie para guiar a los equipos cuando todavia no hay datos o configuracion.",
    title: "Todavia no hay componentes publicados",
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    actions: (
      <>
        <Button>Crear componente</Button>
        <Button variant="outline">Ver guia</Button>
      </>
    ),
    icon: <Sparkles aria-hidden="true" size={28} />,
  },
};
