import * as React from "react";

import { Badge, type BadgeProps } from "../atoms/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../atoms/card";

export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  description?: string;
  label: string;
  status?: string;
  statusVariant?: BadgeProps["variant"];
  trend?: string;
  value: string;
}

export function MetricCard({
  description,
  label,
  status,
  statusVariant = "primary",
  trend,
  value,
  ...props
}: MetricCardProps) {
  return (
    <Card {...props}>
      <CardHeader>
        <div>
          <CardTitle>{label}</CardTitle>
          {description ? <CardDescription>{description}</CardDescription> : null}
        </div>
        {status ? <Badge variant={statusVariant}>{status}</Badge> : null}
      </CardHeader>
      <CardContent>
        <p className="nds-metric-card__value">{value}</p>
        {trend ? <p className="nds-metric-card__trend">{trend}</p> : null}
      </CardContent>
    </Card>
  );
}
