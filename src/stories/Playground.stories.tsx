import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight, BarChart3, Bell, Database, FileText, Globe2, Plus, Settings, Users } from "lucide-react";

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
        background: "var(--nds-background)",
        color: "var(--nds-foreground)",
        minHeight: "100vh",
        padding: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          margin: "0 auto",
          maxWidth: "88rem",
        }}
      >
        <aside
          className="nds-card"
          style={{
            display: "grid",
            flex: "0 0 16rem",
            minHeight: "calc(100vh - 2rem)",
            padding: "1.5rem 1rem",
          }}
        >
          <div>
            <div style={{ alignItems: "center", display: "flex", gap: "1rem" }}>
              <div
                style={{
                  alignItems: "center",
                  background: "var(--nds-primary-container)",
                  borderRadius: "var(--nds-radius-md)",
                  boxShadow: "var(--nds-shadow-icon)",
                  color: "var(--nds-primary-container-foreground)",
                  display: "flex",
                  height: "3rem",
                  justifyContent: "center",
                  width: "3rem",
                }}
              >
                <BarChart3 size={20} />
              </div>
              <div>
                <strong style={{ display: "block" }}>Nerum Corp</strong>
                <span style={{ color: "var(--nds-muted-foreground)", fontSize: "0.75rem" }}>
                  Enterprise Plan
                </span>
              </div>
            </div>

            <nav style={{ display: "grid", gap: "0.5rem", marginTop: "2rem" }}>
              {[
                "Home",
                "Workspaces",
                "Tasks",
                "Reports",
                "Team",
              ].map((item, index) => (
                <a
                  className="nds-app-shell__nav-item"
                  data-active={index === 0 ? "true" : undefined}
                  href="#"
                  key={item}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <Button>
            <Plus size={16} /> New Project
          </Button>
        </aside>

        <section style={{ display: "grid", flex: 1, gap: "1rem", minWidth: 0 }}>
          <header
            className="nds-card"
            style={{
              alignItems: "center",
              display: "flex",
              gap: "1rem",
              justifyContent: "space-between",
              padding: "1rem 1.5rem",
            }}
          >
            <Field aria-label="Search" label="Search" placeholder="Search..." style={{ maxWidth: "18rem" }} />
            <nav style={{ display: "flex", gap: "1.5rem" }}>
              <a href="#" style={{ color: "var(--nds-primary)", fontWeight: 600 }}>
                Dashboard
              </a>
              <a href="#" style={{ color: "var(--nds-muted-foreground)", textDecoration: "none" }}>
                Projects
              </a>
              <a href="#" style={{ color: "var(--nds-muted-foreground)", textDecoration: "none" }}>
                Analytics
              </a>
            </nav>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <Button aria-label="Notifications" size="icon" variant="outline">
                <Bell size={18} />
              </Button>
              <Button aria-label="Settings" size="icon" variant="outline">
                <Settings size={18} />
              </Button>
            </div>
          </header>

          <div
            style={{
              alignItems: "flex-end",
              display: "flex",
              gap: "1rem",
              justifyContent: "space-between",
              margin: "2rem 0 1rem",
            }}
          >
            <div>
              <h1
                style={{
                  fontFamily: "var(--nds-font-display)",
                  fontSize: "clamp(2.5rem, 6vw, 4rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                  margin: 0,
                }}
              >
                Welcome Back, Alex
              </h1>
              <p
                style={{
                  color: "var(--nds-muted-foreground)",
                  fontSize: "1.125rem",
                  margin: "0.5rem 0 0",
                }}
              >
                Here's what's happening with your projects today.
              </p>
            </div>
            <Button size="lg">
              Generate report <ArrowRight size={18} />
            </Button>
          </div>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "minmax(0, 2fr) minmax(20rem, 1fr)",
            }}
          >
            <Card style={{ minHeight: "25rem", position: "relative" }}>
              <div
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in srgb, var(--nds-primary) 7%, transparent), transparent)",
                  borderRadius: "var(--nds-radius-lg)",
                  inset: 0,
                  pointerEvents: "none",
                  position: "absolute",
                }}
              />
              <CardHeader style={{ position: "relative" }}>
                <div>
                  <CardDescription style={{ textTransform: "uppercase" }}>
                    Total Revenue
                  </CardDescription>
                  <p
                    style={{
                      fontSize: "clamp(3.25rem, 8vw, 5rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                      margin: "0.5rem 0 0",
                    }}
                  >
                    $124,500
                  </p>
                </div>
                <Badge variant="success">+14.5%</Badge>
              </CardHeader>
              <CardContent style={{ position: "relative" }}>
                <div
                  style={{
                    alignItems: "end",
                    display: "flex",
                    gap: "0.5rem",
                    height: "9rem",
                  }}
                >
                  {[25, 50, 35, 75, 100, 55, 68].map((height, index) => (
                    <div
                      key={height + index}
                      style={{
                        background:
                          index === 4
                            ? "color-mix(in srgb, var(--nds-primary) 62%, transparent)"
                            : "color-mix(in srgb, var(--nds-surface-variant) 72%, transparent)",
                        borderRadius: "1.5rem 1.5rem 0 0",
                        boxShadow:
                          index === 4 ? "0 0 15px rgb(0 108 73 / 0.3)" : undefined,
                        height: `${height}%`,
                        width: "100%",
                      }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div>
                  <div
                    style={{
                      alignItems: "center",
                      background: "var(--nds-secondary)",
                      borderRadius: "var(--nds-radius-md)",
                      boxShadow: "var(--nds-shadow-icon)",
                      color: "var(--nds-secondary-foreground)",
                      display: "flex",
                      height: "3rem",
                      justifyContent: "center",
                      marginBottom: "1.5rem",
                      width: "3rem",
                    }}
                  >
                    <FileText size={20} />
                  </div>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Streamline product workflows with one-click actions.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent style={{ display: "grid", gap: "0.75rem" }}>
                {(
                  [
                  ["Generate Report", <FileText key="file" size={18} />],
                  ["Invite Member", <Users key="users" size={18} />],
                  ] as const
                ).map(([label, icon]) => (
                  <Button key={String(label)} style={{ justifyContent: "space-between" }} variant="outline">
                    <span style={{ alignItems: "center", display: "flex", gap: "0.75rem" }}>
                      {icon}
                      {label}
                    </span>
                    <ArrowRight size={16} />
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Active Projects</CardTitle>
              <Button variant="ghost">View All</Button>
            </CardHeader>
            <CardContent
              style={{
                display: "grid",
                gap: "1rem",
                gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
              }}
            >
              {(
                [
                ["Website Redesign", "Overhauling the main corporate site.", 75, <Globe2 key="globe" size={20} />],
                ["Q3 Campaign", "Executing the multi-channel launch.", 40, <BarChart3 key="chart" size={20} />],
                ["Data Migration", "Moving legacy customer data to cloud.", 90, <Database key="database" size={20} />],
                ] as const
              ).map(([title, description, progress, icon]) => (
                <Card key={String(title)}>
                  <CardHeader>
                    <div
                      style={{
                        alignItems: "center",
                        background: "color-mix(in srgb, var(--nds-primary-container) 18%, var(--nds-card))",
                        borderRadius: "var(--nds-radius-md)",
                        boxShadow: "var(--nds-shadow-icon)",
                        color: "var(--nds-primary)",
                        display: "flex",
                        height: "3rem",
                        justifyContent: "center",
                        width: "3rem",
                      }}
                    >
                      {icon}
                    </div>
                    <Badge variant={Number(progress) > 50 ? "success" : "warning"}>
                      {Number(progress) > 50 ? "On Track" : "At Risk"}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                    <div
                      style={{
                        background: "var(--nds-surface-variant)",
                        borderRadius: "999px",
                        boxShadow: "inset 2px 2px 5px rgb(0 0 0 / 0.08)",
                        height: "0.75rem",
                        marginTop: "1.5rem",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          background:
                            Number(progress) > 50 ? "var(--nds-primary)" : "var(--nds-warning)",
                          borderRadius: "999px",
                          height: "100%",
                          width: `${progress}%`,
                        }}
                      />
                    </div>
                    <p
                      style={{
                        color: "var(--nds-muted-foreground)",
                        display: "flex",
                        fontSize: "0.75rem",
                        justifyContent: "space-between",
                        margin: "0.5rem 0 0",
                      }}
                    >
                      <span>Progress</span>
                      <span>{progress}%</span>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
            <CardFooter>
              <MetricCard label="Design adoption" status="Live" statusVariant="success" value="84%" />
            </CardFooter>
          </Card>
        </section>
      </div>
    </main>
  ),
};
