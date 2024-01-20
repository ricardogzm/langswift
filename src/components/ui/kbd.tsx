import { cn } from "@/lib/utils";
import { Children } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const kbdVariants = cva(
  "space-x-1 rounded-full bg-muted font-mono text-muted-foreground",
  {
    variants: {
      size: {
        small: "px-1.5 py-[3px] text-xs",
        base: "px-2 py-1 text-sm",
      },
    },
    defaultVariants: {
      size: "base",
    },
  }
);

export interface KbdProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof kbdVariants> {
  className?: string;
  children: React.ReactNode;
}

export function Kbd({ size, className, children, ...props }: KbdProps) {
  return (
    <span className={cn(kbdVariants({ size, className }))} {...props}>
      {Children.map(children, (child) => {
        return <kbd>{child}</kbd>;
      })}
    </span>
  );
}
