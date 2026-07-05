import * as React from "react";

export interface EmptyStateProps {
  actions?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  title: React.ReactNode;
}

export function EmptyState({
  actions,
  description,
  icon = (
    <svg
      aria-hidden="true"
      fill="none"
      height="28"
      viewBox="0 0 24 24"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3.75 4.75 7.5 12 11.25 19.25 7.5 12 3.75Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
      <path
        d="M4.75 7.5v8.75L12 20l7.25-3.75V7.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
      <path
        d="M12 11.25V20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  ),
  title,
}: EmptyStateProps) {
  return (
    <section className="nds-empty-state">
      <div className="nds-empty-state__icon">{icon}</div>
      <h2 className="nds-empty-state__title">{title}</h2>
      {description ? (
        <p className="nds-empty-state__description">{description}</p>
      ) : null}
      {actions ? <div className="nds-empty-state__actions">{actions}</div> : null}
    </section>
  );
}
