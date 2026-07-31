import type { ElementType, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: boolean;
  className?: string;
}

/** Marks its content to be animated in by `useScrollReveal` once it enters the viewport. */
export function Reveal({ children, as: Tag = "div", delay = false, className = "" }: RevealProps) {
  const classes = ["reveal", delay && "reveal--delay", className].filter(Boolean).join(" ");
  return <Tag className={classes}>{children}</Tag>;
}
