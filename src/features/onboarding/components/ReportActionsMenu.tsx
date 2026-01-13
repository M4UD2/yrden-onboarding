import React from "react";
// Optimized imports - only import icons we actually use
import { Edit, Eye, History, Code, Copy, Link2, Trash2 } from "lucide-react";

interface MenuItem {
  icon?: React.ComponentType<any>;
  label?: string;
  action?: () => void;
  subtitle?: string;
  divider?: boolean;
  danger?: boolean;
}

interface ReportActionsMenuProps {
  reportName: string;
  onClose: () => void;
  position: { x: number; y: number };
}

export default function ReportActionsMenu({
  reportName,
  onClose,
  position
}: ReportActionsMenuProps) {
  const menuItems: MenuItem[] = [
    { icon: Edit, label: "Edit report", action: () => console.log("Edit") },
    { icon: Eye, label: "View details", action: () => console.log("View details") },
    { divider: true },
    { label: "Use data", action: () => console.log("Use data") },
    { divider: true },
    { label: "Open in BI", action: () => console.log("Open in BI"), subtitle: "Open in your selected preferred BI" },
    { divider: true },
    { icon: History, label: "Last execution", action: () => console.log("Last execution") },
    { label: "All executions", action: () => console.log("All executions") },
    { divider: true },
    { icon: Code, label: "Get SELECT statement", action: () => console.log("Get SELECT"), subtitle: "Copy ready-to-use SQL query" },
    { icon: Copy, label: "Copy from last execution", action: () => console.log("Copy"), subtitle: "Get data" },
    { icon: Link2, label: "Get connection string", action: () => console.log("Get connection"), subtitle: "Set up one-time connection for your BI" },
    { divider: true },
    { icon: Trash2, label: "Delete report", action: () => console.log("Delete"), danger: true }
  ];

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div
        className="fixed bg-surface rounded-xl shadow-2xl border border-border py-2 z-50 w-[280px] transition-all duration-300"
        style={{ top: `${position.y}px`, left: `${position.x}px`, transform: 'translateX(-100%)' }}
      >
        {menuItems.map((item, idx) => {
          if (item.divider) return <div key={idx} className="h-px bg-border my-2" />;
          const Icon = item.icon;
          return (
            <button
              key={idx}
              onClick={() => { item.action?.(); onClose(); }}
              className={`w-full px-4 py-2.5 text-left hover:bg-surface-overlay transition-colors flex items-start gap-3 ${item.danger ? 'text-destructive' : 'text-foreground'}`}
            >
              {Icon && <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${item.danger ? 'text-destructive' : 'text-muted-foreground'}`} />}
              <div className="flex-1 min-w-0">
                <div className={item.danger ? 'text-destructive' : 'text-foreground'}>{item.label}</div>
                {item.subtitle && <div className="text-xs text-muted-foreground mt-0.5">{item.subtitle}</div>}
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
