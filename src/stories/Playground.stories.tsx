import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight, Layers3, Plus } from "lucide-react";

import { Badge } from "../components/atoms/badge";
import { Button } from "../components/atoms/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/atoms/card";
import { Field } from "../components/cells/field";
import { MetricCard } from "../components/cells/metric-card";
import { EmptyState } from "../components/organisms/empty-state";

const meta = {
  title: "Playground/Nerum System",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductDashboard: Story = {
  render: () => (
    <main
      style={{
        background:
          "radial-gradient(circle at 12% 12%, color-mix(in srgb, var(--nds-primary) 18%, transparent), transparent 24rem), var(--nds-background)",
        color: "var(--nds-foreground)",
        minHeight: "100vh",
        padding: "clamp(1rem, 4vw, 3rem)",
      }}
    >
      <section
        style={{
          display: "grid",
          gap: "1.5rem",
          margin: "0 auto",
          maxWidth: "72rem",
        }}
      >
        <div
          style={{
            alignItems: "flex-start",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Badge>Alpha package</Badge>
            <h1
              style={{
                fontFamily: "var(--nds-font-display)",
                fontSize: "clamp(3rem, 9vw, 7rem)",
                letterSpacing: "-0.07em",
                lineHeight: 0.88,
                margin: "1rem 0 0",
                maxWidth: "11ch",
              }}
            >
              Nerum Design System
            </h1>
          </div>
          <Button size="lg">
            Publicar release <ArrowRight size={18} />
          </Button>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
          }}
        >
          <MetricCard label="Atoms" status="Core" value="6" />
          <MetricCard label="Cells" status="Composable" statusVariant="success" value="2" />
          <MetricCard label="Organisms" status="Product" statusVariant="warning" value="2" />
        </div>

        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(18rem, 0.9fr)",
          }}
        >
          <Card>
            <CardHeader>
              <div>
                <CardTitle>Crear componente</CardTitle>
                <CardDescription>
                  Flujo ejemplo para registrar una pieza reusable del sistema.
                </CardDescription>
              </div>
              <Badge variant="secondary">Storybook</Badge>
            </CardHeader>
            <CardContent style={{ display: "grid", gap: "1rem" }}>
              <Field label="Nombre" placeholder="ProductSwitcher" />
              <Field
                description="Atoms, cells u organisms segun el nivel de composicion."
                label="Jerarquia"
                placeholder="cells"
              />
            </CardContent>
            <CardFooter>
              <Button variant="outline">Cancelar</Button>
              <Button>
                <Plus size={16} /> Guardar
              </Button>
            </CardFooter>
          </Card>

          <EmptyState
            actions={<Button variant="secondary">Explorar tokens</Button>}
            description="El playground funciona como laboratorio visual para validar tokens, estados y composicion antes de publicar."
            icon={<Layers3 aria-hidden="true" size={28} />}
            title="Laboratorio visual"
          />
        </div>
      </section>
    </main>
  ),
};
