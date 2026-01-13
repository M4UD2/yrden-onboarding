import * as React from "react";
import { FileText, Loader, AlertCircle, Calendar } from "lucide-react";
import { Badge } from "../atoms/Badge";

interface StatusBadgeProps {
  status: string;
  className?: string;
}

const STATUS_CONFIG = {
  Saved: { icon: FileText, variant: "info" as const },
  Processing: { icon: Loader, variant: "info" as const },
  Failed: { icon: AlertCircle, variant: "destructive" as const },
  Scheduled: { icon: Calendar, variant: "warning" as const },
  Active: { icon: FileText, variant: "success" as const },
  Syncing: { icon: Loader, variant: "info" as const }
} as const;

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  const config = STATUS_CONFIG[status as keyof typeof STATUS_CONFIG] || STATUS_CONFIG.Saved;
  const Icon = config.icon;

  return (
    <Badge variant={config.variant} className={`inline-flex items-center gap-1.5 ${className}`}>
      <Icon className={`w-4 h-4 ${status === 'Processing' || status === 'Syncing' ? 'animate-spin' : ''}`} />
      {status}
    </Badge>
  );
};

export { StatusBadge, type StatusBadgeProps };
