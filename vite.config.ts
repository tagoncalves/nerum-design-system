import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const isStorybookLifecycle = process.env.npm_lifecycle_event?.includes("storybook");

export default defineConfig({
  plugins: [
    react(),
    !isStorybookLifecycle
      ? dts({
          exclude: ["**/*.stories.tsx", "src/stories/**"],
          insertTypesEntry: true,
          rollupTypes: true,
        })
      : undefined,
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "NerumDesignSystem",
      fileName: "nerum-design-system",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [
        "@radix-ui/react-slot",
        "class-variance-authority",
        "clsx",
        "react",
        "react-dom",
        "react/jsx-runtime",
        "tailwind-merge",
      ],
    },
  },
});
