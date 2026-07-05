import * as React from "react";

export interface AppShellProps {
  actions?: React.ReactNode;
  brand?: React.ReactNode;
  children: React.ReactNode;
  navItems?: Array<{
    active?: boolean;
    href: string;
    label: string;
  }>;
  title?: React.ReactNode;
}

export function AppShell({
  actions,
  brand = "Nerum",
  children,
  navItems = [],
  title,
}: AppShellProps) {
  return (
    <div className="nds-app-shell">
      <aside className="nds-app-shell__sidebar">
        <div className="nds-app-shell__brand">{brand}</div>
        {navItems.length > 0 ? (
          <nav aria-label="Principal" className="nds-app-shell__nav">
            {navItems.map((item) => (
              <a
                className="nds-app-shell__nav-item"
                data-active={item.active ? "true" : undefined}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </aside>
      <main className="nds-app-shell__main">
        <header className="nds-app-shell__topbar">
          <div>{title}</div>
          <div>{actions}</div>
        </header>
        <section className="nds-app-shell__content">{children}</section>
      </main>
    </div>
  );
}
