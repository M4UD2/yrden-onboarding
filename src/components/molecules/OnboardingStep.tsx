import * as React from "react";
import { CheckCircle2, PlayCircle, Lock } from "lucide-react";
import { cn } from "../ui/utils";

interface OnboardingStepProps {
  id: number;
  title: string;
  description: string;
  actionable?: boolean;
  targetPage?: string;
  status?: 'active' | 'completed' | 'upcoming' | 'locked';
  waiting?: boolean;
  waitingText?: string;
  onClick?: () => void;
  className?: string;
}

const OnboardingStep: React.FC<OnboardingStepProps> = ({
  title,
  description,
  status = 'upcoming',
  waiting = false,
  waitingText,
  onClick,
  className
}) => {
  const getIcon = () => {
    if (status === 'locked') return <Lock className="w-5 h-5 text-disabled-foreground" />;
    if (status === 'completed') return <CheckCircle2 className="w-5 h-5 text-success" />;
    if (status === 'active') return <PlayCircle className="w-5 h-5 text-primary fill-primary" />;
    return <div className="w-5 h-5 rounded-full border-2 border-border" />;
  };

  return (
    <button
      onClick={status !== 'locked' ? onClick : undefined}
      disabled={status === 'locked'}
      className={cn(
        "w-full border rounded-lg p-4 transition-all duration-300 text-left",
        status === 'active'
          ? 'bg-brand-surface border-primary/20 shadow-sm'
          : 'bg-surface border-border',
        status === 'locked' ? 'cursor-not-allowed bg-surface-overlay' : 'hover:bg-surface-overlay',
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0 mt-0.5">{getIcon()}</div>
        <div className="flex-1">
          <h3 className={cn(
            "font-medium",
            status === 'active' ? 'text-primary' : 'text-foreground'
          )}>
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mt-1">{description}</p>
          {waiting && <p className="text-sm mt-2 text-warning">{waitingText}</p>}
        </div>
      </div>
    </button>
  );
};

export { OnboardingStep, type OnboardingStepProps };
