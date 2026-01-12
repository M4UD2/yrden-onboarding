import { useState } from "react";
import svgPaths from "../imports/svg-d8uyy9xgj3";
import { toast } from "sonner@2.0.3";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { 
  CheckCircle2, 
  PlayCircle, 
  Lock, 
  ChevronRight, 
  Search, 
  Plus, 
  MoreVertical,
  Database,
  Zap,
  TrendingUp,
  Clock,
  Bell,
  HelpCircle,
  Settings,
  LogOut,
  X,
  Loader2,
  FileText,
  Cloud,
  Smartphone,
  Upload,
  Menu,
  ChevronLeft,
  Filter,
  Download,
  Trash2,
  Loader,
  Check,
  ChevronDown,
  AlertCircle,
  Calendar,
  Edit,
  Eye,
  BarChart3,
  Code,
  Copy,
  Link2,
  History,
  Mail,
  EyeOff
} from "lucide-react";

// Logo Component
function Logo() {
  return (
    <div className="h-[24px] relative w-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
        <path d={svgPaths.p16276a00} fill="var(--fill-0, #263238)" />
      </svg>
    </div>
  );
}

// Navigation Component
function Navigation({ 
  currentPage, 
  onNavigate, 
  isExpanded, 
  onToggleExpanded 
}: { 
  currentPage: string; 
  onNavigate: (page: string) => void;
  isExpanded: boolean;
  onToggleExpanded: () => void;
}) {
  const navItems = [
    { icon: TrendingUp, page: 'reports', label: 'Reports' },
    { icon: Database, page: 'data-sources', label: 'Data Sources' },
    { icon: Clock, page: 'schedules', label: 'Schedules' },
  ];

  const bottomItems = [
    { icon: Bell, label: 'Notifications' },
    { icon: HelpCircle, label: 'Help' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <TooltipProvider delayDuration={200}>
      <div className="[grid-area:1_/_1] bg-[#fbfbfb] relative shrink-0 flex flex-col border-r border-gray-200 transition-all duration-300 overflow-hidden">
        {/* Logo */}
        <div className={`flex items-center h-[61px] mt-6 mb-8 px-4 ${isExpanded ? 'justify-between' : 'justify-center'}`}>
        <div className={`flex items-center ${isExpanded ? 'gap-3' : ''}`}>
          <div className="w-[47px] flex items-center justify-center shrink-0">
            <Logo />
          </div>
          {isExpanded && (
            <span className="text-gray-900 whitespace-nowrap">Yrden</span>
          )}
        </div>
        
        {/* Toggle Button - always visible */}
        <Tooltip>
          <TooltipTrigger asChild>
            <button 
              onClick={onToggleExpanded}
              className="p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-400 hover:text-gray-600 shrink-0 -mr-2"
            >
              {isExpanded ? (
                <ChevronLeft className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          </TooltipTrigger>
          <TooltipContent side="right" className="bg-gray-900 text-white border-gray-800">
            <p>{isExpanded ? "Colapsar menu" : "Expandir menu"}</p>
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Main Navigation */}
      <div className="flex flex-col gap-1 px-4">
        {navItems.map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <button
                onClick={() => onNavigate(item.page)}
                className={`h-[47px] rounded-lg flex items-center transition-colors ${
                  isExpanded ? 'justify-start gap-3 px-3' : 'justify-center w-[47px]'
                } ${
                  currentPage === item.page 
                    ? 'bg-gray-200 text-gray-900' 
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                {isExpanded && (
                  <span className="whitespace-nowrap">{item.label}</span>
                )}
              </button>
            </TooltipTrigger>
            {!isExpanded && (
              <TooltipContent side="right" className="bg-gray-900 text-white border-gray-800">
                <p>{item.label}</p>
              </TooltipContent>
            )}
          </Tooltip>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="mt-auto mb-4 flex flex-col gap-1 px-4 border-t border-gray-200 pt-4">
        {bottomItems.map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <button
                className={`h-[47px] rounded-lg flex items-center text-gray-500 hover:bg-gray-100 transition-colors ${
                  isExpanded ? 'justify-start gap-3 px-3' : 'justify-center w-[47px]'
                }`}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                {isExpanded && (
                  <span className="whitespace-nowrap">{item.label}</span>
                )}
              </button>
            </TooltipTrigger>
            {!isExpanded && (
              <TooltipContent side="right" className="bg-gray-900 text-white border-gray-800">
                <p>{item.label}</p>
              </TooltipContent>
            )}
          </Tooltip>
        ))}
        
        {/* User Avatar */}
        <div className={`mt-4 h-[47px] rounded-lg bg-gray-200 flex items-center ${
          isExpanded ? 'justify-start gap-3 px-3' : 'justify-center w-[47px]'
        }`}>
          <div className="w-[47px] h-[47px] rounded-lg bg-gray-200 flex items-center justify-center shrink-0">
            <span className="text-gray-500">S</span>
          </div>
          {isExpanded && (
            <div className="flex flex-col items-start">
              <span className="text-gray-900 text-sm">Sofia</span>
              <span className="text-gray-500 text-xs">sofia@yrden.com</span>
            </div>
          )}
        </div>

        {/* Logout */}
        <Tooltip>
          <TooltipTrigger asChild>
            <button className={`h-[47px] rounded-lg flex items-center text-red-500 hover:bg-red-50 transition-colors mt-2 ${
              isExpanded ? 'justify-start gap-3 px-3' : 'justify-center w-[47px]'
            }`}>
              <LogOut className="w-5 h-5 shrink-0" />
              {isExpanded && (
                <span className="whitespace-nowrap">Logout</span>
              )}
            </button>
          </TooltipTrigger>
          {!isExpanded && (
            <TooltipContent side="right" className="bg-gray-900 text-white border-gray-800">
              <p>Logout</p>
            </TooltipContent>
          )}
        </Tooltip>
      </div>
      </div>
    </TooltipProvider>
  );
}

// Report Actions Menu Component
function ReportActionsMenu({ 
  reportName, 
  onClose, 
  position 
}: { 
  reportName: string; 
  onClose: () => void; 
  position: { x: number; y: number } 
}) {
  const menuItems = [
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
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose}
      />
      
      {/* Menu */}
      <div 
        className="fixed bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50 w-[280px] transition-all duration-300"
        style={{ 
          top: `${position.y}px`, 
          left: `${position.x}px`,
          transform: 'translateX(-100%)' 
        }}
      >
        {menuItems.map((item, idx) => {
          if (item.divider) {
            return <div key={idx} className="h-px bg-gray-200 my-2" />;
          }

          const Icon = item.icon;
          
          return (
            <button
              key={idx}
              onClick={() => {
                item.action?.();
                onClose();
              }}
              className={`w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors flex items-start gap-3 ${
                item.danger ? 'text-red-600' : 'text-gray-700'
              }`}
            >
              {Icon && (
                <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${item.danger ? 'text-red-600' : 'text-gray-500'}`} />
              )}
              <div className="flex-1 min-w-0">
                <div className={item.danger ? 'text-red-600' : 'text-gray-900'}>
                  {item.label}
                </div>
                {item.subtitle && (
                  <div className="text-xs text-gray-500 mt-0.5">
                    {item.subtitle}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}

// Report Details Modal Component
function ReportDetailsModal({ 
  report, 
  onClose 
}: { 
  report: any; 
  onClose: () => void; 
}) {
  const [activeTab, setActiveTab] = useState("last-execution");
  const [analyzeMenuOpen, setAnalyzeMenuOpen] = useState(false);
  const [showCopiedFeedback, setShowCopiedFeedback] = useState(false);

  const reportData = [
    { 
      callingpartyaddr_tel: "115521988776655", 
      NumAnormalizado: "21999995555", 
      calledpartyaddr_tel: "4190098113614", 
      operadoraB: "TIM", 
      Chamada: "OR", 
      TipoChamada: "Normal", 
      DataInicio: "7/29/2019" 
    },
    { 
      callingpartyaddr_tel: "115521988776655", 
      NumAnormalizado: "21999995555", 
      calledpartyaddr_tel: "4181144", 
      operadoraB: "Oi", 
      Chamada: "OR", 
      TipoChamada: "Normal", 
      DataInicio: "7/29/2019" 
    },
    { 
      callingpartyaddr_tel: "115521988776655", 
      NumAnormalizado: "21999995555", 
      calledpartyaddr_tel: "4159626007", 
      operadoraB: "Oi", 
      Chamada: "OR", 
      TipoChamada: "Normal", 
      DataInicio: "7/29/2019" 
    },
    { 
      callingpartyaddr_tel: "115521988776655", 
      NumAnormalizado: "21999995555", 
      calledpartyaddr_tel: "4159626007", 
      operadoraB: "Oi", 
      Chamada: "OR", 
      TipoChamada: "Normal", 
      DataInicio: "7/29/2019" 
    },
    { 
      callingpartyaddr_tel: "115521988776655", 
      NumAnormalizado: "21999995555", 
      calledpartyaddr_tel: "4159626007", 
      operadoraB: "Oi", 
      Chamada: "OR", 
      TipoChamada: "Normal", 
      DataInicio: "7/29/2019" 
    },
  ];

  const handleCopyAction = (action: string) => {
    setShowCopiedFeedback(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setShowCopiedFeedback(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-7xl max-h-[90vh] flex flex-col transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="text-gray-900 mb-4">{report.name}</h2>
            <div className="grid grid-cols-4 gap-6 text-sm">
              <div>
                <div className="text-gray-500 mb-1">Author:</div>
                <div className="text-gray-900">rogerinho.inga</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Report kit:</div>
                <div className="text-gray-900">166</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Visibility:</div>
                <div className="text-gray-900">Selected users</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Creation date:</div>
                <div className="text-gray-900">2025-01-22 03:00:00</div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 ml-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Edit className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Copy className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <FileText className="w-5 h-5 text-gray-600" />
            </button>
            
            {/* Analyze Data Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setAnalyzeMenuOpen(!analyzeMenuOpen)}
                className="bg-blue-600 hover:bg-blue-700 text-white pl-2 pr-4 py-2 rounded-lg flex items-center gap-2.5 transition-all duration-300"
              >
                <div className="bg-white/20 backdrop-blur-sm p-1.5 rounded">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <span>Analyze data</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {analyzeMenuOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setAnalyzeMenuOpen(false)}
                  />
                  <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50 w-[320px] transition-all duration-300">
                    <button className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-3">
                        <Database className="w-4 h-4 mt-0.5 shrink-0 text-gray-500" />
                        <div>
                          <div className="text-gray-900">Open in Metabase</div>
                          <div className="text-xs text-gray-500 mt-0.5">View and analyze results directly</div>
                        </div>
                      </div>
                    </button>
                    
                    <div className="h-px bg-gray-200 my-2" />
                    
                    <button className="w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors flex items-center gap-3">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-900">Last execution</span>
                    </button>
                    <button className="w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors flex items-center gap-3">
                      <History className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-900">All executions</span>
                    </button>
                    
                    <div className="h-px bg-gray-200 my-2" />
                    
                    <button 
                      onClick={() => handleCopyAction("SELECT")}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <Code className="w-4 h-4 mt-0.5 shrink-0 text-gray-500" />
                        <div>
                          <div className="text-gray-900">Get SELECT statement</div>
                          <div className="text-xs text-gray-500 mt-0.5">Copy ready-to-use SQL query</div>
                        </div>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleCopyAction("last execution")}
                      className="w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors flex items-center gap-3"
                    >
                      <Copy className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-900">Copy from last execution</span>
                    </button>
                    <button 
                      onClick={() => handleCopyAction("all executions")}
                      className="w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors flex items-center gap-3"
                    >
                      <Copy className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-900">Copy from all executions</span>
                    </button>
                    
                    <div className="h-px bg-gray-200 my-2" />
                    
                    <button 
                      onClick={() => handleCopyAction("connection string")}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <Link2 className="w-4 h-4 mt-0.5 shrink-0 text-gray-500" />
                        <div>
                          <div className="text-gray-900">Get connection string</div>
                          <div className="text-xs text-gray-500 mt-0.5">Set up one-time connection for your BI</div>
                        </div>
                      </div>
                    </button>
                    
                    {showCopiedFeedback && (
                      <div className="px-4 py-2 bg-green-50 border-t border-green-200 mt-2">
                        <div className="flex items-center gap-2 text-green-700 text-sm">
                          <Check className="w-4 h-4" />
                          Copied to clipboard
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
            
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 px-6">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab("last-execution")}
              className={`py-3 border-b-2 transition-colors ${
                activeTab === "last-execution"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Last execution
            </button>
            <button
              onClick={() => setActiveTab("all-executions")}
              className={`py-3 border-b-2 transition-colors ${
                activeTab === "all-executions"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              All executions
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`py-3 border-b-2 transition-colors ${
                activeTab === "settings"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Report settings
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === "last-execution" && (
            <div className="space-y-4">
              <h3 className="text-gray-900">Report</h3>
              
              {/* Table */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-left text-gray-700">callingpartyaddr_tel</th>
                        <th className="px-4 py-3 text-left text-gray-700">NumAnormalizado</th>
                        <th className="px-4 py-3 text-left text-gray-700">calledpartyaddr_tel</th>
                        <th className="px-4 py-3 text-left text-gray-700">operadoraB</th>
                        <th className="px-4 py-3 text-left text-gray-700">Chamada</th>
                        <th className="px-4 py-3 text-left text-gray-700">TipoChamada</th>
                        <th className="px-4 py-3 text-left text-gray-700">DataInicio</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {reportData.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-200 last:border-b-0">
                          <td className="px-4 py-3 text-gray-600">{row.callingpartyaddr_tel}</td>
                          <td className="px-4 py-3 text-gray-600">{row.NumAnormalizado}</td>
                          <td className="px-4 py-3 text-gray-600">{row.calledpartyaddr_tel}</td>
                          <td className="px-4 py-3 text-gray-600">{row.operadoraB}</td>
                          <td className="px-4 py-3 text-gray-600">{row.Chamada}</td>
                          <td className="px-4 py-3 text-gray-600">{row.TipoChamada}</td>
                          <td className="px-4 py-3 text-gray-600">{row.DataInicio}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Info Text */}
              <div className="text-center text-sm text-gray-600">
                This is a sample of the data in the report. Click{" "}
                <button 
                  onClick={() => setAnalyzeMenuOpen(true)}
                  className="text-blue-600 hover:underline"
                >
                  'Analyze data'
                </button>
                {" "}to view all data or{" "}
                <button className="text-blue-600 hover:underline">'Export'</button>
                {" "}to download it
              </div>
            </div>
          )}
          
          {activeTab === "all-executions" && (
            <div className="text-center text-gray-500 py-12">
              All executions content
            </div>
          )}
          
          {activeTab === "settings" && (
            <div className="text-center text-gray-500 py-12">
              Report settings content
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Reports Content Component
function ReportsContent() {
  const [selectedReports, setSelectedReports] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [selectedReport, setSelectedReport] = useState<any | null>(null);

  const reports = [
    {
      id: "ID",
      name: "Getting Started with Axiom",
      subtitle: "(Guide)",
      owner: "Axiom Team",
      dataSource: "Sample CSV",
      lastRun: "Oct 10, 2025, 11:30 AM",
      status: "Saved",
      statusColor: "blue"
    },
    {
      id: "ID",
      name: "User Engagement Funnel",
      subtitle: "(Analytics Template)",
      owner: "Axiom Team",
      dataSource: "Google Analytics (Sample)",
      lastRun: "Now",
      status: "Processing",
      statusColor: "blue"
    },
    {
      id: "ID",
      name: "Marketing Attribution",
      subtitle: "(Ads Template)",
      owner: "Axiom Team",
      dataSource: "Ads & CRM (Sample Data)",
      lastRun: "Oct 12, 2025, 4:30 PM",
      status: "Failed",
      statusColor: "red"
    },
    {
      id: "ID",
      name: "Customer Health Score",
      subtitle: "(Zendesk Template)",
      owner: "Axiom Team",
      dataSource: "Zendesk (Sample Data)",
      lastRun: "Oct 13, 2025, 9:00 AM",
      status: "Scheduled",
      statusColor: "purple"
    },
    {
      id: "ID",
      name: "Revenue Metrics",
      subtitle: "(Stripe Template)",
      owner: "Axiom Team",
      dataSource: "Stripe (Sample Data)",
      lastRun: "Oct 13, 2025, 9:15 AM",
      status: "Saved",
      statusColor: "blue"
    }
  ];

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedReports([]);
    } else {
      setSelectedReports(reports.map((_, index) => index));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectReport = (index: number) => {
    if (selectedReports.includes(index)) {
      setSelectedReports(selectedReports.filter(i => i !== index));
    } else {
      setSelectedReports([...selectedReports, index]);
    }
  };

  const getStatusBadge = (status: string, color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-700 border-blue-200',
      red: 'bg-red-100 text-red-700 border-red-200',
      purple: 'bg-purple-100 text-purple-700 border-purple-200'
    };
    
    const icons = {
      'Saved': FileText,
      'Processing': Loader,
      'Failed': AlertCircle,
      'Scheduled': Calendar
    };
    
    const Icon = icons[status as keyof typeof icons] || FileText;
    
    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-sm ${colors[color as keyof typeof colors]}`}>
        <Icon className={`w-4 h-4 ${status === 'Processing' ? 'animate-spin' : ''}`} />
        {status}
      </span>
    );
  };

  return (
    <div className="[grid-area:1_/_2] relative shrink-0 bg-white overflow-auto">
      <div className="px-10 py-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between gap-4 mb-1">
            <h1 className="text-gray-900">Reports</h1>
          </div>
          <p className="text-gray-600">Easily link your data and begin generating insightful reports</p>
        </div>

        {/* Search and Actions Bar */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder=""
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex-1"></div>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Trash2 className="w-5 h-5 text-gray-600" />
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700">
            Schedule
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300">
            <Plus className="w-4 h-4" />
            New report
          </button>
        </div>

        {/* Table */}
        <div className="border border-gray-300 rounded-lg overflow-hidden bg-gray-100">
          {/* Table Header */}
          <div className="bg-gray-200 border-b border-gray-300 grid grid-cols-[48px_80px_2fr_1.5fr_1.5fr_1.8fr_1.2fr_48px] gap-4 px-4 py-3">
            <div className="flex items-center justify-center">
              <input 
                type="checkbox" 
                checked={selectAll}
                onChange={handleSelectAll}
                className="w-4 h-4 rounded border-gray-300"
              />
            </div>
            <div className="text-gray-700 text-sm">ID</div>
            <div className="text-gray-700 text-sm">Name</div>
            <div className="text-gray-700 text-sm">Owner</div>
            <div className="text-gray-700 text-sm">Data Source</div>
            <div className="text-gray-700 text-sm">Last run</div>
            <div className="text-gray-700 text-sm">Status</div>
            <div className="w-10"></div>
          </div>

          {/* Table Body */}
          <div className="bg-white">
            {reports.map((report, index) => (
              <div
                key={index}
                className="grid grid-cols-[48px_80px_2fr_1.5fr_1.5fr_1.8fr_1.2fr_48px] gap-4 px-4 py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-center">
                  <input 
                    type="checkbox"
                    checked={selectedReports.includes(index)}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleSelectReport(index);
                    }}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                </div>
                <div 
                  className="text-gray-600 flex items-center text-sm cursor-pointer"
                  onClick={() => setSelectedReport(report)}
                >
                  {report.id}
                </div>
                <div 
                  className="flex flex-col justify-center cursor-pointer"
                  onClick={() => setSelectedReport(report)}
                >
                  <span className="text-gray-900">{report.name}</span>
                  <span className="text-gray-500 text-sm">{report.subtitle}</span>
                </div>
                <div 
                  className="text-gray-600 flex items-center text-sm cursor-pointer"
                  onClick={() => setSelectedReport(report)}
                >
                  {report.owner}
                </div>
                <div 
                  className="text-gray-600 flex items-center text-sm cursor-pointer"
                  onClick={() => setSelectedReport(report)}
                >
                  {report.dataSource}
                </div>
                <div 
                  className="text-gray-600 flex items-center text-sm cursor-pointer"
                  onClick={() => setSelectedReport(report)}
                >
                  {report.lastRun}
                </div>
                <div 
                  className="flex items-center cursor-pointer"
                  onClick={() => setSelectedReport(report)}
                >
                  {getStatusBadge(report.status, report.statusColor)}
                </div>
                <div className="relative">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      const rect = e.currentTarget.getBoundingClientRect();
                      setMenuPosition({ 
                        x: rect.right, 
                        y: rect.top 
                      });
                      setOpenMenuIndex(openMenuIndex === index ? null : index);
                    }}
                    className="text-gray-400 hover:text-gray-600 w-10 flex items-center justify-center"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>
                  
                  {openMenuIndex === index && (
                    <ReportActionsMenu 
                      reportName={report.name}
                      position={menuPosition}
                      onClose={() => setOpenMenuIndex(null)}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-gray-600 text-sm">
            Showing 1 to 10 of 10
          </div>
          <div className="flex items-center gap-2">
            <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>10 rows per page</option>
              <option>25 rows per page</option>
              <option>50 rows per page</option>
            </select>
            <div className="flex items-center gap-1">
              <button disabled className="px-3 py-1.5 border border-gray-300 rounded-lg transition-colors opacity-50 cursor-not-allowed">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg">1</button>
              <button disabled className="px-3 py-1.5 border border-gray-300 rounded-lg transition-colors opacity-50 cursor-not-allowed">
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Report Details Modal */}
      {selectedReport && (
        <ReportDetailsModal 
          report={selectedReport}
          onClose={() => setSelectedReport(null)}
        />
      )}
    </div>
  );
}

// File Upload Modal Component (Wizard)
function FileUploadModal({ onClose, onUploadComplete }: { onClose: () => void; onUploadComplete: (file: any) => void }) {
  const [step, setStep] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadingFile, setUploadingFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  
  // Step 2 state
  const [tableName, setTableName] = useState("");
  const [useFirstRowAsHeader, setUseFirstRowAsHeader] = useState(true);
  const [delimiter, setDelimiter] = useState("comma");
  const [previewData, setPreviewData] = useState<any[]>([]);
  const [columns, setColumns] = useState<Array<{ name: string; type: string }>>([]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const generateMockData = (fileName: string) => {
    // Remove extensão do arquivo e usa como nome da tabela
    const nameWithoutExt = fileName.replace(/\.(csv|xlsx|json)$/i, '');
    setTableName(nameWithoutExt);

    // Gera dados de preview mockados
    const mockPreview = [
      { sale_date: "2025-01-15", product_name: "Laptop Pro", amount: "1299.99", quantity: "2", customer: "Ana Silva" },
      { sale_date: "2025-01-16", product_name: "Mouse Wireless", amount: "29.99", quantity: "5", customer: "João Santos" },
      { sale_date: "2025-01-17", product_name: "Teclado Mecânico", amount: "149.99", quantity: "1", customer: "Maria Costa" },
      { sale_date: "2025-01-18", product_name: "Monitor 4K", amount: "599.99", quantity: "3", customer: "Pedro Lima" },
      { sale_date: "2025-01-19", product_name: "Webcam HD", amount: "89.99", quantity: "2", customer: "Carla Souza" },
    ];
    setPreviewData(mockPreview);

    // Auto-detecta tipos de dados
    const detectedColumns = [
      { name: "sale_date", type: "date" },
      { name: "product_name", type: "text" },
      { name: "amount", type: "number" },
      { name: "quantity", type: "number" },
      { name: "customer", type: "text" },
    ];
    setColumns(detectedColumns);
  };

  const handleFileSelect = (file: File) => {
    setUploadingFile(file);
    setIsUploading(true);
    
    // Simula o progresso de upload
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 20;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsUploading(false);
          generateMockData(file.name);
          setStep(2); // Vai para tela de configuração
        }, 500);
      }
      setUploadProgress(Math.min(progress, 100));
    }, 150);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleComplete = () => {
    if (!uploadingFile) return;

    const fileData = {
      name: tableName,
      type: uploadingFile.name.endsWith('.csv') ? 'CSV' : uploadingFile.name.endsWith('.xlsx') ? 'Excel' : 'JSON',
      lines: `${previewData.length}k lines`,
      owner: "Sofia",
      lastSync: "Sincronizando agora",
      status: "Syncing",
      size: `${(uploadingFile.size / 1024).toFixed(2)} KB`
    };

    onUploadComplete(fileData);
    onClose();
    
    // Toast de sucesso
    setTimeout(() => {
      toast.success(`✓ Sucesso! A fonte de dados "${tableName}" foi adicionada.`, {
        duration: 4000,
      });
    }, 300);
  };

  const handleColumnTypeChange = (index: number, newType: string) => {
    const newColumns = [...columns];
    newColumns[index].type = newType;
    setColumns(newColumns);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl mx-4 max-h-[90vh] flex flex-col transition-all duration-300" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-gray-900">
              {step === 1 ? 'Adicionar seu arquivo' : 'Configurar seus dados'}
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              {step === 1 
                ? 'Faça upload de arquivos CSV, Excel (.xlsx) ou JSON' 
                : 'Revise e confirme as configurações dos seus dados'}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* Step 1: Upload */}
          {step === 1 && !isUploading && (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors cursor-pointer ${
                isDragging 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
              }`}
              onClick={() => document.getElementById('file-input')?.click()}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Upload className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-gray-900 mb-2">
                  {isDragging ? 'Solte o arquivo aqui' : 'Arraste e solte seu arquivo aqui'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">ou</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300">
                  Ou procure em seu computador
                </button>
                <div className="mt-6 text-sm text-gray-500 space-y-1">
                  <p>Formatos suportados: CSV, Excel (.xlsx), JSON</p>
                  <p>Tamanho máximo do arquivo: 100MB</p>
                </div>
              </div>
              <input
                id="file-input"
                type="file"
                accept=".csv,.xlsx,.json"
                className="hidden"
                onChange={handleFileInputChange}
              />
            </div>
          )}

          {/* Step 1: Uploading Progress */}
          {step === 1 && isUploading && (
            <div className="py-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-gray-900 truncate">{uploadingFile?.name}</h3>
                  <p className="text-gray-600 text-sm">
                    {uploadingFile && `${(uploadingFile.size / 1024).toFixed(2)} KB`}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Enviando...</span>
                  <span className="text-gray-900">{Math.round(uploadProgress)}%</span>
                </div>
                <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-blue-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Configuration */}
          {step === 2 && (
            <div className="space-y-6">
              {/* Preview dos Dados */}
              <div>
                <h3 className="text-gray-900 mb-3">Pré-visualização dos Dados</h3>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-100 border-b border-gray-200">
                        <tr>
                          {Object.keys(previewData[0] || {}).map((header, idx) => (
                            <th key={idx} className="px-4 py-3 text-left text-gray-700">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {previewData.map((row, rowIdx) => (
                          <tr key={rowIdx} className="border-b border-gray-200 last:border-b-0">
                            {Object.values(row).map((cell: any, cellIdx) => (
                              <td key={cellIdx} className="px-4 py-3 text-gray-600">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Opções Inteligentes */}
              <div className="space-y-4">
                <h3 className="text-gray-900">Opções Inteligentes</h3>
                
                {/* Nome da Tabela */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Nome da Tabela</label>
                  <input
                    type="text"
                    value={tableName}
                    onChange={(e) => setTableName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ex: vendas_q4_2025"
                  />
                </div>

                {/* Checkbox Cabeçalho */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="use-header"
                    checked={useFirstRowAsHeader}
                    onChange={(e) => setUseFirstRowAsHeader(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <label htmlFor="use-header" className="text-sm text-gray-700">
                    Usar a primeira linha como cabeçalho
                  </label>
                </div>

                {/* Delimitador (se CSV) */}
                {uploadingFile?.name.endsWith('.csv') && (
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Delimitador</label>
                    <select
                      value={delimiter}
                      onChange={(e) => setDelimiter(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="comma">Vírgula (,)</option>
                      <option value="semicolon">Ponto e vírgula (;)</option>
                      <option value="tab">Tab</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Mapeamento de Tipos */}
              <div>
                <h3 className="text-gray-900 mb-3">Mapeamento de Tipos</h3>
                <div className="space-y-3">
                  {columns.map((col, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
                        {col.name}
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                      <div className="flex-1 relative">
                        <select
                          value={col.type}
                          onChange={(e) => handleColumnTypeChange(idx, e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                        >
                          <option value="text">Texto</option>
                          <option value="number">Número</option>
                          <option value="date">Data</option>
                          <option value="boolean">Booleano</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {step === 2 && (
          <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
            >
              Cancelar
            </button>
            <button
              onClick={handleComplete}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-300"
            >
              <Check className="w-4 h-4" />
              Concluir e Sincronizar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Data Sources Content Component
function DataSourcesContent() {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [connectedSources, setConnectedSources] = useState([
    {
      name: "Vendas 2024",
      type: "CSV",
      lines: "1.2k lines",
      owner: "Jorge Ventura",
      lastSync: "2 horas atrás",
      status: "Active"
    },
    {
      name: "Google Analytics",
      type: "Integration",
      lines: "2.4M registros",
      owner: "Sofia",
      lastSync: "Sincronizando agora",
      status: "Syncing"
    }
  ]);

  const dataSourceTypes = [
    {
      icon: <FileText className="w-9 h-9 text-gray-600" />,
      title: "File Uploads",
      description: "CSV, Microsoft Excel (.xlsx), JSON",
      onClick: () => setShowUploadModal(true)
    },
    {
      icon: <Smartphone className="w-9 h-9 text-gray-600" />,
      title: "Applications & SaaS",
      description: "Stripe, Salesforce, Zendesk, Google Analytics, Google Ads, Facebook Ads"
    },
    {
      icon: <Cloud className="w-9 h-9 text-gray-600" />,
      title: "Cloud Storage",
      description: "Google Drive, OneDrive, Dropbox, Google Cloud Storage, Amazon S3"
    },
    {
      icon: <Database className="w-9 h-9 text-gray-600" />,
      title: "Databases",
      description: "PostgreSQL, MySQL, MongoDB, SQL Server"
    }
  ];

  const handleUploadComplete = (fileData: any) => {
    setConnectedSources([fileData, ...connectedSources]);
  };

  return (
    <div className="[grid-area:1_/_2] relative shrink-0 bg-white overflow-y-auto">
      <div className="px-10 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-1">Data Sources</h1>
          <p className="text-gray-600">Connect your data simply and start creating reports</p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-sm pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Connect new source */}
        <div className="mb-8">
          <h2 className="text-gray-900 mb-4">Connect new source</h2>
          <div className="grid grid-cols-2 gap-4">
            {dataSourceTypes.map((source, index) => (
              <button
                key={index}
                onClick={source.onClick}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-left hover:bg-gray-100 hover:border-gray-300 transition-all group"
              >
                <div className="mb-3">{source.icon}</div>
                <h3 className="text-gray-900 mb-1">{source.title}</h3>
                <p className="text-gray-600 text-sm">{source.description}</p>
              </button>
            ))}
          </div>
        </div>
        
        {/* Upload Modal */}
        {showUploadModal && (
          <FileUploadModal 
            onClose={() => setShowUploadModal(false)}
            onUploadComplete={handleUploadComplete}
          />
        )}

        {/* Connected sources */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-900">Connected sources</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="space-y-3">
            {connectedSources.map((source, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-1">{source.name}</h3>
                      <p className="text-gray-600 text-sm">
                        {source.type} - {source.lines}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="mb-2">
                      <span
                        className={`text-xs px-3 py-1 rounded-full ${
                          source.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {source.status}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">Proprietário: {source.owner}</p>
                    <p className="text-gray-600 text-sm">Última sincronização: {source.lastSync}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Onboarding Step Component
function OnboardingStep({ 
  step, 
  status, 
  title, 
  description, 
  onClick, 
  locked = false,
  waiting = false,
  showProgress = false,
  progressText = "",
  waitingText = ""
}: { 
  step: number;
  status: 'completed' | 'active' | 'upcoming' | 'locked';
  title: string;
  description: string;
  onClick?: () => void;
  locked?: boolean;
  waiting?: boolean;
  showProgress?: boolean;
  progressText?: string;
  waitingText?: string;
}) {
  const getIcon = () => {
    if (locked) return <Lock className="w-5 h-5 text-gray-400" />;
    if (status === 'completed') return <CheckCircle2 className="w-5 h-5 text-green-600" />;
    if (status === 'active') return <PlayCircle className="w-5 h-5 text-blue-600 fill-blue-600" />;
    return <div className="w-5 h-5 rounded-full border-2 border-gray-300" />;
  };

  const getTextColor = () => {
    if (locked) return 'text-gray-500';
    if (status === 'completed') return 'text-gray-500';
    if (status === 'active') return 'text-blue-600';
    return 'text-gray-700';
  };

  const getBgColor = () => {
    if (status === 'active') return 'bg-blue-50 border-blue-200 hover:bg-blue-100 cursor-pointer';
    if (locked) return 'bg-gray-50 border-gray-200 cursor-not-allowed';
    if (status === 'upcoming') return 'bg-white border-gray-200 hover:bg-gray-50 cursor-pointer';
    return 'bg-white border-gray-200';
  };

  const isClickable = !locked && (status === 'active' || status === 'upcoming');

  return (
    <div>
      <button
        onClick={!locked ? onClick : undefined}
        disabled={locked}
        className={`w-full border rounded-lg p-4 transition-all duration-300 ${getBgColor()} ${
          status === 'active' ? 'shadow-sm' : ''
        } ${isClickable ? 'group' : ''}`}
      >
        <div className="flex items-start gap-3">
          <div className="shrink-0 mt-0.5">{getIcon()}</div>
          <div className="flex-1 text-left">
            <div className={`flex items-start justify-between ${status === 'completed' ? 'line-through' : ''}`}>
              <h3 className={`${getTextColor()} ${status === 'active' ? 'font-medium' : ''}`}>
                {title}
              </h3>
              {isClickable && (
                <ChevronRight className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                  status === 'active' ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5'
                }`} />
              )}
            </div>
            <p className="text-gray-500 text-sm mt-1">{description}</p>
            {waiting && waitingText && (
              <p className={`text-sm mt-2 ${locked ? 'text-gray-500' : 'text-amber-700'}`}>{waitingText}</p>
            )}
          </div>
        </div>
      </button>
    </div>
  );
}

// Sidebar Component
function Sidebar({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isMinimized, setIsMinimized] = useState(false);
  
  const steps = [
    {
      title: "Explore sample reports",
      description: "See Yrden's power with interactive demos",
      status: currentStep === 1 ? 'active' as const : currentStep > 1 ? 'completed' as const : 'upcoming' as const,
      actionable: true,
      action: () => {
        if (onNavigate) onNavigate('reports');
      }
    },
    {
      title: "Connect your first data source",
      description: "Link Stripe, Zendesk, or Google Analytics",
      status: currentStep === 2 ? 'active' as const : currentStep > 2 ? 'completed' as const : 'upcoming' as const,
      showProgress: currentStep === 2,
      progressText: "Sincronizando seus dados... (aprox. 60 min)",
      actionable: true,
      action: () => {
        if (onNavigate) onNavigate('data-sources');
        setCurrentStep(2);
      }
    },
    {
      title: "Access your real data",
      description: "Unlocks automatically after sync completes",
      status: 'locked' as const,
      locked: true,
      waiting: true,
      waitingText: "⌛ Syncing your workspace...",
      actionable: false
    }
  ];

  const progress = (currentStep / 3) * 100;

  // Versão minimizada
  if (isMinimized) {
    return (
      <TooltipProvider delayDuration={200}>
        <div className="[grid-area:1_/_3] bg-blue-50 relative shrink-0 border-l border-blue-200 w-16 flex flex-col items-center py-6 transition-all duration-300">
          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                onClick={() => setIsMinimized(false)}
                className="text-blue-400 hover:text-blue-600 transition-colors mb-4"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-gray-900 text-white border-gray-800">
              <p>Expandir Quick Start</p>
            </TooltipContent>
          </Tooltip>
          
          <div className="flex flex-col items-center gap-4">
            <div className="bg-blue-600 rounded-full p-2">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <div className={`w-2 h-2 rounded-full ${currentStep >= 1 ? 'bg-blue-600' : 'bg-blue-300'}`}></div>
              <div className={`w-2 h-2 rounded-full ${currentStep >= 2 ? 'bg-blue-600' : 'bg-blue-300'}`}></div>
              <div className={`w-2 h-2 rounded-full ${currentStep >= 3 ? 'bg-blue-600' : 'bg-blue-300'}`}></div>
            </div>
          </div>
        </div>
      </TooltipProvider>
    );
  }

  /// Versão expandida
  return (
    <TooltipProvider delayDuration={200}>
      <div className="[grid-area:1_/_3] bg-blue-50 relative shrink-0 border-l border-blue-200 transition-all duration-300">
        <div className="p-6 flex flex-col h-full">
          {/* Header with minimize option */}
          <div className="flex items-start justify-between mb-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                <h2 className="text-gray-900 text-lg font-semibold">Getting started</h2>
              </div>
              <p className="text-gray-600 text-sm max-w-xs">
                Sincronizando seu workspace... (aprox. 60 min). Enquanto isso, explore a plataforma e inicie sua configuração
              </p>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <button 
                  onClick={() => setIsMinimized(true)}
                  className="text-blue-400 hover:text-blue-600 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="left" className="bg-gray-900 text-white border-gray-800">
                <p>Minimizar Quick Start</p>
              </TooltipContent>
            </Tooltip>
          </div>
          
          {/* Steps */}
          <div className="space-y-3 flex-1">
            {steps.map((step, index) => (
              <OnboardingStep
                key={index}
                step={index + 1}
                status={step.status}
                title={step.title}
                description={step.description}
                locked={step.locked}
                waiting={step.waiting}
                showProgress={step.showProgress}
                progressText={step.progressText}
                waitingText={step.waitingText}
                onClick={() => {
                  if (step.actionable && step.action && (step.status === 'active' || step.status === 'upcoming') && !step.locked) {
                    step.action();
                  }
                }}
              />
            ))}
          </div>

          {/* Help Text */}
          <div className="mt-6 p-4 bg-blue-100 border border-blue-200 rounded-lg">
            <div className="flex gap-3">
              <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-blue-900 text-sm font-medium mb-1">Need help?</h4>
                <p className="text-blue-700 text-sm">
                  Our team is here to guide you through setup
                </p>
                <button className="text-blue-600 text-sm hover:underline mt-2 font-medium">
                  Contact support →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}

// Coach Mark Component
function CoachMark({ onDismiss }: { onDismiss: () => void }) {
  return (
    <>
      {/* Overlay escuro */}
      <div 
        className="fixed inset-0 bg-black/60 z-40 animate-in fade-in duration-300"
        onClick={onDismiss}
      />
      
      {/* Spotlight sobre o sidebar - corta o overlay para destacar */}
      <div 
        className="fixed top-0 right-0 bottom-0 w-[320px] z-50 pointer-events-none"
        style={{
          boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.6)'
        }}
      />
      
      {/* Popover com a dica */}
      <div className="fixed right-[340px] top-24 z-50 animate-in slide-in-from-right-4 fade-in duration-500">
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md border border-gray-200 relative">
  {/* Close button */}
  <button
    onClick={onDismiss}
    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
    aria-label="Close"
  >
    <X className="w-5 h-5" />
  </button>
  
  {/* Icon */}
  <div className="flex justify-center mb-4">
    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
      <Zap className="w-8 h-8 text-blue-600" />
    </div>
  </div>
  
  {/* Title */}
  <h2 className="text-gray-900 text-center mb-6">
    Bem-vinda ao Yrden, Sofia!
  </h2>
  
  {/* Content sections */}
  <div className="space-y-4 mb-6">
    {/* What is the product */}
    <div>
      <p className="text-gray-700 text-sm leading-relaxed">
        O Yrden é a nova plataforma de dados da Momentum que unifica todos os seus dados de negócio em uma única fonte confiável.
      </p>
    </div>
    
    {/* Why wait */}
    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
      <div className="flex items-start gap-3">
        <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-blue-900 text-sm">
            <span className="font-medium">Estamos sincronizando seus dados reais</span> das suas fontes conectadas (aprox. 60 min).
          </p>
        </div>
      </div>
    </div>
    
    {/* Next action */}
    <div>
      <p className="text-gray-700 text-sm leading-relaxed">
        Enquanto aguarda, siga nosso guia para explorar a plataforma e se familiarizar com os principais recursos.
      </p>
    </div>
  </div>
  
  {/* CTA Button */}
  <button
    onClick={onDismiss}
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 w-full text-center"
  >
    Explore o poder do Yrden
  </button>
</div>
      </div>
    </>
  );
}

// Welcome/Login Screen Component
function WelcomeScreen({ onComplete }: { onComplete: () => void }) {
  const [isCreatingPassword, setIsCreatingPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreatePassword = async () => {
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Password created successfully!");
      onComplete();
    }, 1500);
  };

  const handleMicrosoftLogin = async () => {
    setIsLoading(true);
    // Simulate Microsoft SSO
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Logged in with Microsoft!");
      onComplete();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="text-gray-900 text-xl">Yrden</span>
          </div>
        </div>

        {/* Welcome Card */}
        <div className="bg-white rounded-xl shadow-2xl p-8 border border-gray-100 transition-all duration-300">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
              <Mail className="w-7 h-7 text-blue-600" />
            </div>
            <h1 className="text-gray-900 mb-2">Welcome to Yrden, Sofia!</h1>
            <p className="text-gray-600">
              Jorge Ventura has invited you to join the Orbit workspace
            </p>
          </div>

          {!isCreatingPassword ? (
            <>
              {/* Microsoft Login Button */}
              <button
                onClick={handleMicrosoftLogin}
                disabled={isLoading}
                className="w-full bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 py-3 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <svg className="w-5 h-5" viewBox="0 0 21 21" fill="none">
                      <rect x="1" y="1" width="9" height="9" fill="#F25022"/>
                      <rect x="11" y="1" width="9" height="9" fill="#7FBA00"/>
                      <rect x="1" y="11" width="9" height="9" fill="#00A4EF"/>
                      <rect x="11" y="11" width="9" height="9" fill="#FFB900"/>
                    </svg>
                    Continue with Microsoft
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">or</span>
                </div>
              </div>

              {/* Create Password Button */}
              <button
    onClick={() => setIsCreatingPassword(true)}
    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-300 text-center"
>
    Create password
</button>

              {/* Footer */}
              <p className="text-center text-sm text-gray-500 mt-6">
                By continuing, you agree to Yrden's{" "}
                <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
              </p>
            </>
          ) : (
            <>
              {/* Create Password Form */}
              <div className="space-y-4">
                {/* Email Display */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email</label>
                  <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-600 border border-gray-200">
                    sofia@company.com
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Create password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter at least 8 characters"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Confirm password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter your password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Password Requirements */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-2">Password must contain:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${password.length >= 8 ? 'bg-green-500' : 'bg-gray-300'}`} />
                      At least 8 characters
                    </li>
                    <li className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${/[A-Z]/.test(password) ? 'bg-green-500' : 'bg-gray-300'}`} />
                      One uppercase letter
                    </li>
                    <li className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${/[0-9]/.test(password) ? 'bg-green-500' : 'bg-gray-300'}`} />
                      One number
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => setIsCreatingPassword(false)}
                    disabled={isLoading}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleCreatePassword}
                    disabled={isLoading || !password || !confirmPassword}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      "Create account"
                    )}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Help Text */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Need help?{" "}
          <a href="#" className="text-blue-600 hover:underline">Contact support</a>
        </p>
      </div>
    </div>
  );
}

// Main Component
export default function OnboardingExperienceRedesign() {
  const [currentPage, setCurrentPage] = useState<string>('reports');
  const [navExpanded, setNavExpanded] = useState(false);
  const [showCoachMark, setShowCoachMark] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navWidth = navExpanded ? '240px' : '80px';

  // Show welcome screen if not authenticated
  if (!isAuthenticated) {
    return <WelcomeScreen onComplete={() => setIsAuthenticated(true)} />;
  }

  return (
    <div 
      className="bg-white relative size-full grid grid-rows-1 transition-all duration-300"
      style={{
        gridTemplateColumns: `${navWidth} 1fr auto`
      }}
    >
      <Navigation 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        isExpanded={navExpanded}
        onToggleExpanded={() => setNavExpanded(!navExpanded)}
      />
      {currentPage === 'reports' && <ReportsContent />}
      {currentPage === 'data-sources' && <DataSourcesContent />}
      {currentPage === 'schedules' && <ReportsContent />}
      
      {/* Quick Start Panel - sempre visível, minimizável mas não fechável */}
      <Sidebar onNavigate={setCurrentPage} />
      
      {/* Coach Mark - mostra apenas na primeira vez */}
      {showCoachMark && (
        <CoachMark onDismiss={() => setShowCoachMark(false)} />
      )}
    </div>
  );
}
