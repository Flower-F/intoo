import { defineSemanticTokens } from "@pandacss/dev";

export const borders = defineSemanticTokens.borders({
  lg: {
    value: "var(--radius)",
  },
  md: {
    value: "calc(var(--radius) - 2px)",
  },
  sm: {
    value: "calc(var(--radius) - 4px)",
  },
});
