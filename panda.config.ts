import { defineConfig } from "@pandacss/dev";
import { semanticTokens } from "./theme/semantic-tokens";

export default defineConfig({
  preflight: true, // Whether to use css reset
  jsxFramework: "react",
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      semanticTokens,
    },
  },
  staticCss: {
    recipes: {
      button: [{ variant: ["*"], size: ["*"] }],
    },
  },
  outdir: "styled-system",
});
