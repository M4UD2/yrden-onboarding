import { ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../../components/ui/tooltip";
import { navItems, bottomItems } from "../data/mockData";
import svgPaths from "../../../imports/svg-d8uyy9xgj3";

function Logo() {
  return (
    <div className="h-[24px] relative w-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
        <path d={svgPaths.p16276a00} fill="var(--fill-0, #263238)" />
      </svg>
    </div>
  );
}

export default function Navigation({ currentPage, onNavigate, isExpanded, onToggleExpanded }: any) {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="bg-[#fbfbfb] relative shrink-0 flex flex-col border-r border-gray-200 transition-all duration-300 overflow-hidden h-full">
        <div className={`flex items-center h-[61px] mt-6 mb-8 px-4 ${isExpanded ? 'justify-between' : 'justify-center'}`}>
          <div className={`flex items-center ${isExpanded ? 'gap-3' : ''}`}>
            <div className="w-[47px] flex items-center justify-center shrink-0"><Logo /></div>
            {isExpanded && <span className="text-gray-900 whitespace-nowrap">Yrden</span>}
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <button onClick={onToggleExpanded} className="p-2 rounded-lg hover:bg-gray-200 text-gray-400 hover:text-gray-600 shrink-0 -mr-2">
                {isExpanded ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
            </TooltipTrigger>
            <TooltipContent side="right"><p>{isExpanded ? "Colapsar" : "Expandir"}</p></TooltipContent>
          </Tooltip>
        </div>
        
        <div className="flex flex-col gap-1 px-4">
          {navItems.map((item, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <button onClick={() => onNavigate(item.page)} className={`h-[47px] rounded-lg flex items-center transition-colors ${isExpanded ? 'justify-start gap-3 px-3' : 'justify-center w-[47px]'} ${currentPage === item.page ? 'bg-gray-200 text-gray-900' : 'text-gray-500 hover:bg-gray-100'}`}>
                  <item.icon className="w-5 h-5 shrink-0" />
                  {isExpanded && <span className="whitespace-nowrap">{item.label}</span>}
                </button>
              </TooltipTrigger>
              {!isExpanded && <TooltipContent side="right"><p>{item.label}</p></TooltipContent>}
            </Tooltip>
          ))}
        </div>

        <div className="mt-auto mb-4 flex flex-col gap-1 px-4 border-t border-gray-200 pt-4">
          {bottomItems.map((item, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <button className={`h-[47px] rounded-lg flex items-center text-gray-500 hover:bg-gray-100 transition-colors ${isExpanded ? 'justify-start gap-3 px-3' : 'justify-center w-[47px]'}`}>
                  <item.icon className="w-5 h-5 shrink-0" />
                  {isExpanded && <span className="whitespace-nowrap">{item.label}</span>}
                </button>
              </TooltipTrigger>
              {!isExpanded && <TooltipContent side="right"><p>{item.label}</p></TooltipContent>}
            </Tooltip>
          ))}
          <div className={`mt-4 h-[47px] rounded-lg bg-gray-200 flex items-center ${isExpanded ? 'justify-start gap-3 px-3' : 'justify-center w-[47px]'}`}>
            <div className="w-[47px] h-[47px] rounded-lg bg-gray-200 flex items-center justify-center shrink-0"><span className="text-gray-500">S</span></div>
            {isExpanded && <div className="flex flex-col items-start"><span className="text-gray-900 text-sm">Sofia</span><span className="text-gray-500 text-xs">sofia@yrden.com</span></div>}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
