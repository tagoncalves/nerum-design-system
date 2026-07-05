# Nerum Design System

React component package for Nerum products, structured from shadcn conventions with typed variants, CSS design tokens, Storybook documentation, and a clean component hierarchy.

## Stack

- React + TypeScript
- Vite library build
- Storybook with autodocs and individual stories
- ESLint flat config
- shadcn-style utilities: `cn`, `cva`, `asChild`
- Component hierarchy: atoms, cells, organisms

## Scripts

```bash
npm install
npm run storybook
npm run doctor
npm run build
npm run build:storybook
```

## Cloudflare Pages Deploy

Storybook is deployed to Cloudflare Pages automatically on every push to `main`.

Create a Cloudflare Pages project named `nerum-design-system` with `main` as the production branch. Then add these GitHub repository secrets:

- `CLOUDFLARE_ACCOUNT_ID`: Cloudflare account ID.
- `CLOUDFLARE_API_TOKEN`: API token with Cloudflare Pages edit permissions for the account.

The GitHub Actions workflow builds the package, builds Storybook, and deploys the `storybook-static` directory.

## Usage

```tsx
import { Button } from "@nerum/design-system";
import "@nerum/design-system/styles.css";

export function Example() {
  return <Button>Crear producto</Button>;
}
```

## Architecture

- `src/components/atoms`: indivisible primitives such as `Button`, `Input`, `Badge`, `Card`.
- `src/components/cells`: small composed units such as `Field` and `MetricCard`.
- `src/components/organisms`: product-ready sections such as `AppShell` and `EmptyState`.
- `src/stories/Playground.stories.tsx`: visual playground for product teams.
- `src/styles.css`: Nerum tokens, themes, reset and component classes.

## Theming

The default theme is dark and uses Nerum tokens. Consumers can override CSS variables at `:root` or set `data-theme="light"` / `data-theme="dark"` on a parent element.
