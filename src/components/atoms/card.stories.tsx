import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./badge";
import { Button } from "./button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

const meta = {
  title: "Atoms/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card style={{ maxWidth: "26rem" }}>
      <CardHeader>
        <div>
          <CardTitle>Nerum Core</CardTitle>
          <CardDescription>Base compartida para productos financieros.</CardDescription>
        </div>
        <CardAction>
          <Badge variant="success">Activo</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        Componentes listos para interfaz, documentación y composición por capas.
      </CardContent>
      <CardFooter>
        <Button variant="outline">Ver docs</Button>
        <Button>Instalar</Button>
      </CardFooter>
    </Card>
  ),
};
