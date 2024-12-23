import path from "path";
import react from "@vitejs/plugin-react-swc";
/// <reference types="vitest/config" />
import { defineConfig } from "vite";

import type { UserConfig } from "vite";
import type { UserConfig as VitestConfig } from "vitest/node";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    environmentOptions: {
      jsdom: {
        resources: "usable",
      },
    },
    globals: true,
    setupFiles: ["./src/vitest-setup.ts"],
  },
} as UserConfig & { test: VitestConfig });
