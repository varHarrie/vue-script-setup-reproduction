export type ButtonSize = "small" | "medium" | "large";
export type ButtonType = "normal" | "primary" | "warn" | "danger";

export interface ButtonProps {
  size: ButtonSize;
  type: ButtonType;
}

export type ButtonEvents = ["click"];
