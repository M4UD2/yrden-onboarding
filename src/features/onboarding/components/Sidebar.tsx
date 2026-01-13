import { useState } from "react";
import { Zap, ChevronLeft, ChevronRight, HelpCircle, CheckCircle2, PlayCircle, Lock } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../../components/ui/tooltip";
import { onboardingSteps } from "../data/mockData";

function OnboardingStep({ step, status, title, description, onClick, locked, waiting, waitingText }: any) {
  const getIcon = () => {
    if (locked) return <Lock className="w-5 h-5 text-gray-400" />;
    if (status === 'completed') return <CheckCircle2 className="w-5 h-5 text-green-600" />;
    if (status === 'active') return <PlayCircle className="w-5 h-5 text-blue-600 fill-blue-600" />;
    return <div className="w-5 h-5 rounded-full border-2 border-gray-300" />;
  };

  return (
    <button onClick={!locked ? onClick : undefined} disabled={locked} className={`w-full border rounded-lg p-4 transition-all duration-300 text-left ${status === 'active' ? 'bg-blue-50 border-blue-200 shadow-sm' : 'bg-white border-gray-200'} ${locked ? 'cursor-not-allowed bg-gray-50' : 'hover:bg-gray-50'}`}>
      <div className="flex items-start gap-3">
        <div className="shrink-0 mt-0.5">{getIcon()}</div>
        <div className="flex-1">
          <h3 className={`font-medium ${status === 'active' ? 'text-blue-600' : 'text-gray-700'}`}>{title}</h3>
          <p className="text-gray-500 text-sm mt-1">{description}</p>
          {waiting && <p className="text-sm mt-2 text-amber-700">{waitingText}</p>}
        </div>
      </div>
    </button>
  );
}

export default function Sidebar({ onNavigate }: any) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isMinimized, setIsMinimized] = useState(false);

  if (isMinimized) {
    return (
      <div className="bg-blue-50 border-l border-blue-200 w-16 flex flex-col items-center py-6">
        <button onClick={() => setIsMinimized(false)} className="mb-4 text-blue-400"><ChevronLeft /></button>
        <Zap className="text-blue-600" />
      </div>
    );
  }

  return (
    <div className="bg-blue-50 border-l border-blue-200 p-6 flex flex-col h-full w-[320px]">
      <div className="flex justify-between mb-6">
        <div className="flex items-center gap-2"><Zap className="text-blue-600"/><h2 className="font-semibold">Getting started</h2></div>
        <button onClick={() => setIsMinimized(true)} className="text-blue-400"><ChevronRight /></button>
      </div>
      <div className="space-y-3 flex-1">
        {onboardingSteps.map((step, idx) => (
          <OnboardingStep key={idx} {...step} step={idx + 1} status={currentStep === step.id ? 'active' : currentStep > step.id ? 'completed' : 'upcoming'} onClick={() => { if(step.actionable) { onNavigate(step.targetPage); setCurrentStep(step.id); }}} />
        ))}
      </div>
    </div>
  );
}
