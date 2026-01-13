import React, { useState } from "react";
import { Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { OnboardingStep } from "../../molecules/OnboardingStep";
import { onboardingSteps } from "../../../features/onboarding/data/mockData";

export default function Sidebar({ onNavigate }: any) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isMinimized, setIsMinimized] = useState(false);

  if (isMinimized) {
    return (
      <div className="bg-brand-surface border-l border-primary/20 w-16 flex flex-col items-center py-6">
        <button onClick={() => setIsMinimized(false)} className="mb-4 text-primary/60"><ChevronLeft /></button>
        <Zap className="text-primary" />
      </div>
    );
  }

  return (
    <div className="bg-brand-surface border-l border-primary/20 p-6 flex flex-col h-full w-[320px]">
      <div className="flex justify-between mb-6">
        <div className="flex items-center gap-2"><Zap className="text-primary"/><h2 className="font-semibold text-foreground">Getting started</h2></div>
        <button onClick={() => setIsMinimized(true)} className="text-primary/60"><ChevronRight /></button>
      </div>
      <div className="space-y-3 flex-1">
        {onboardingSteps.map((step, idx) => (
          <OnboardingStep
            key={idx}
            id={step.id}
            title={step.title}
            description={step.description}
            status={currentStep === step.id ? 'active' : currentStep > step.id ? 'completed' : 'upcoming'}
            onClick={() => { if(step.actionable) { onNavigate(step.targetPage); setCurrentStep(step.id); }}}
          />
        ))}
      </div>
    </div>
  );
}
