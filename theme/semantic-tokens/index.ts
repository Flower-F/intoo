import { defineSemanticTokens } from "@pandacss/dev";
import { colors } from "./colors";
import { borders } from "./borders";

export const semanticTokens = defineSemanticTokens({
  colors,
  borders,
});
