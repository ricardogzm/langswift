import { cn } from "@/lib/utils";

interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
}

export function Kbd({ className, children, ...props }: KbdProps) {
  return (
    <kbd
      className={cn(
        "pointer-events-none inline-flex h-5 items-center gap-1 rounded bg-muted px-1.5 font-mono text-xs text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}
