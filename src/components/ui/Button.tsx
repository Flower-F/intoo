import type { ComponentPropsWithoutRef } from "react";
import { ark } from "@ark-ui/react";
import { styled } from "../../../styled-system/jsx";
import { RecipeVariantProps, cva } from "../../../styled-system/css";

const buttonStyle = cva({
  base: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "md",
    fontSize: "sm",
    fontWeight: "medium",
    ringColor: "background",
    transition: "colors",
    cursor: "pointer",
    color: "foreground",
    backgroundColor: "background",
    _focusVisible: {
      outline: "none",
      ringWidth: 2,
      ringOffset: 2,
      ringColor: "ring",
    },
    _disabled: {
      pointerEvents: "none",
      opacity: 0.5,
    },
  },
  variants: {
    variant: {
      default: {
        backgroundColor: "primary",
        color: "primary-foreground",
        _hover: {
          opacity: 0.9,
        },
      },
      destructive: {
        backgroundColor: "destructive",
        color: "destructive-foreground",
        _hover: {
          opacity: 0.9,
        },
      },
      outline: {
        border: "solid",
        borderWidth: 1,
        borderColor: "input",
        _hover: {
          backgroundColor: "accent",
          color: "accent-foreground",
        },
      },
      secondary: {
        backgroundColor: "secondary",
        color: "secondary-foreground",
        _hover: {
          opacity: 0.8,
        },
      },
      ghost: {
        _hover: {
          backgroundColor: "accent",
          color: "accent-foreground",
        },
      },
      link: {
        color: "primary",
        textUnderlineOffset: 4,
        _hover: {
          textDecoration: "underline",
        },
      },
    },
    size: {
      default: {
        height: 10,
        paddingX: 4,
        paddingY: 2,
      },
      sm: {
        height: 9,
        paddingX: 3,
      },
      lg: {
        height: 11,
        paddingX: 8,
      },
      icon: {
        height: 10,
        width: 10,
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type ButtonVariantProps = RecipeVariantProps<typeof buttonStyle>;
export type ButtonProps = ButtonVariantProps & ComponentPropsWithoutRef<typeof ark.button>;

export const Button = styled(ark.button, buttonStyle);
Button.displayName = "Button";
