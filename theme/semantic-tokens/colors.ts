import { defineSemanticTokens } from "@pandacss/dev";

export const colors = defineSemanticTokens.colors({
  border: {
    value: "hsl(var(--border))",
  },
  input: {
    value: "hsl(var(--input))",
  },
  background: {
    value: "hsl(var(--background))",
  },
  foreground: {
    value: "hsl(var(--foreground))",
  },
  ring: {
    value: "hsl(var(--ring))",
  },
  primary: {
    value: "hsl(var(--primary))",
  },
  "primary-foreground": {
    value: "hsl(var(--primary-foreground))",
  },
  secondary: {
    value: "hsl(var(--secondary))",
  },
  "secondary-foreground": {
    value: "hsl(var(--secondary-foreground))",
  },
  destructive: {
    value: "hsl(var(--destructive))",
  },
  "destructive-foreground": {
    value: "hsl(var(--destructive-foreground))",
  },
  muted: {
    value: "hsl(var(--muted))",
  },
  "muted-foreground": {
    value: "hsl(var(--muted-foreground))",
  },
  accent: {
    value: "hsl(var(--accent))",
  },
  "accent-foreground": {
    value: "hsl(var(--accent-foreground))",
  },
  popover: {
    value: "hsl(var(--popover))",
  },
  "popover-foreground": {
    value: "hsl(var(--popover-foreground))",
  },
  card: {
    value: "hsl(var(--card))",
  },
  "card-foreground": {
    value: "hsl(var(--card-foreground))",
  },
});
