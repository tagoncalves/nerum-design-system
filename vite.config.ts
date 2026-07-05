import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      exclude: ["**/*.stories.tsx", "src/stories/**"],
      insertTypesEntry: true,
      rollupTypes: true,
    }),
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
