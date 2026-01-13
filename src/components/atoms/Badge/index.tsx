import * as React from "react";
import { cn } from "../../ui/utils";

interface BadgeProps {
  variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "info";
}

const Badge = React.forwardRef(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-primary text-primary-fg hover:bg-primary/80",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive: "bg-destructive text-destructive-fg hover:bg-destructive/80",
      outline: "border border-border text-foreground",
      success: "bg-success/10 text-success border border-success/20",
      warning: "bg-warning/10 text-warning border border-warning/20",
      info: "bg-info/10 text-info border border-info/20"
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge, type BadgeProps };
