import { useState } from "react";
import { toast } from "sonner";
import { 
  Search, Filter, Download, Trash2, Plus, ChevronLeft, ChevronRight, 
  MoreVertical, FileText, Loader, AlertCircle, Calendar,
  Edit, Eye, History, Code, Copy, Link2, BarChart3, ChevronDown, Database, X, Check
} from "lucide-react";

// --- DADOS (MOCK) ---
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

// --- COMPONENTES AUXILIARES ---

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
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div 
        className="fixed bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50 w-[280px] transition-all duration-300"
        style={{ top: `${position.y}px`, left: `${position.x}px`, transform: 'translateX(-100%)' }}
      >
        {menuItems.map((item: any, idx) => {
          if (item.divider) return <div key={idx} className="h-px bg-gray-200 my-2" />;
          const Icon = item.icon;
          return (
            <button
              key={idx}
              onClick={() => { item.action?.(); onClose(); }}
              className={`w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors flex items-start gap-3 ${item.danger ? 'text-red-600' : 'text-gray-700'}`}
            >
              {Icon && <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${item.danger ? 'text-red-600' : 'text-gray-500'}`} />}
              <div className="flex-1 min-w-0">
                <div className={item.danger ? 'text-red-600' : 'text-gray-900'}>{item.label}</div>
                {item.subtitle && <div className="text-xs text-gray-500 mt-0.5">{item.subtitle}</div>}
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}

function ReportDetailsModal({ report, onClose }: { report: any; onClose: () => void; }) {
  const [activeTab, setActiveTab] = useState("last-execution");
  const [analyzeMenuOpen, setAnalyzeMenuOpen] = useState(false);
  const [showCopiedFeedback, setShowCopiedFeedback] = useState(false);

  const reportData = [
    { callingpartyaddr_tel: "115521988776655", NumAnormalizado: "21999995555", calledpartyaddr_tel: "4190098113614", operadoraB: "TIM", Chamada: "OR", TipoChamada: "Normal", DataInicio: "7/29/2019" },
    { callingpartyaddr_tel: "115521988776655", NumAnormalizado: "21999995555", calledpartyaddr_tel: "4181144", operadoraB: "Oi", Chamada: "OR", TipoChamada: "Normal", DataInicio: "7/29/2019" },
    { callingpartyaddr_tel: "115521988776655", NumAnormalizado: "21999995555", calledpartyaddr_tel: "4159626007", operadoraB: "Oi", Chamada: "OR", TipoChamada: "Normal", DataInicio: "7/29/2019" },
  ];

  const handleCopyAction = (action: string) => {
    setShowCopiedFeedback(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setShowCopiedFeedback(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-7xl max-h-[90vh] flex flex-col transition-all duration-300" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between p-6 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="text-gray-900 mb-4">{report.name}</h2>
            <div className="grid grid-cols-4 gap-6 text-sm">
              <div><div className="text-gray-500 mb-1">Author:</div><div className="text-gray-900">rogerinho.inga</div></div>
              <div><div className="text-gray-500 mb-1">Report kit:</div><div className="text-gray-900">166</div></div>
              <div><div className="text-gray-500 mb-1">Visibility:</div><div className="text-gray-900">Selected users</div></div>
              <div><div className="text-gray-500 mb-1">Creation date:</div><div className="text-gray-900">2025-01-22 03:00:00</div></div>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><Edit className="w-5 h-5 text-gray-600" /></button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><Copy className="w-5 h-5 text-gray-600" /></button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><FileText className="w-5 h-5 text-gray-600" /></button>
            <div className="relative">
              <button onClick={() => setAnalyzeMenuOpen(!analyzeMenuOpen)} className="bg-blue-600 hover:bg-blue-700 text-white pl-2 pr-4 py-2 rounded-lg flex items-center gap-2.5 transition-all duration-300">
                <div className="bg-white/20 backdrop-blur-sm p-1.5 rounded"><BarChart3 className="w-4 h-4" /></div>
                <span>Analyze data</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {analyzeMenuOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setAnalyzeMenuOpen(false)} />
                  <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50 w-[320px] transition-all duration-300">
                    <button className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-3"><Database className="w-4 h-4 mt-0.5 shrink-0 text-gray-500" /><div><div className="text-gray-900">Open in Metabase</div><div className="text-xs text-gray-500 mt-0.5">View and analyze results directly</div></div></div>
                    </button>
                    <div className="h-px bg-gray-200 my-2" />
                    <button onClick={() => handleCopyAction("SELECT")} className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-3"><Code className="w-4 h-4 mt-0.5 shrink-0 text-gray-500" /><div><div className="text-gray-900">Get SELECT statement</div><div className="text-xs text-gray-500 mt-0.5">Copy ready-to-use SQL query</div></div></div>
                    </button>
                    {showCopiedFeedback && <div className="px-4 py-2 bg-green-50 border-t border-green-200 mt-2"><div className="flex items-center gap-2 text-green-700 text-sm"><Check className="w-4 h-4" />Copied to clipboard</div></div>}
                  </div>
                </>
              )}
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><X className="w-5 h-5 text-gray-600" /></button>
          </div>
        </div>
        <div className="border-b border-gray-200 px-6">
          <div className="flex gap-6">
            {["last-execution", "all-executions", "settings"].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`py-3 border-b-2 transition-colors capitalize ${activeTab === tab ? "border-blue-600 text-blue-600" : "border-transparent text-gray-600 hover:text-gray-900"}`}>{tab.replace('-', ' ')}</button>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === "last-execution" && (
            <div className="space-y-4">
              <h3 className="text-gray-900">Report</h3>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100 border-b border-gray-200">
                      <tr>
                        {Object.keys(reportData[0]).map((h, i) => <th key={i} className="px-4 py-3 text-left text-gray-700">{h}</th>)}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {reportData.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-200 last:border-b-0">
                          {Object.values(row).map((v, i) => <td key={i} className="px-4 py-3 text-gray-600">{v}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// --- COMPONENTE PRINCIPAL ---

export default function ReportsView() {
  const [selectedReports, setSelectedReports] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [selectedReport, setSelectedReport] = useState<any | null>(null);

  const handleSelectAll = () => {
    if (selectAll) setSelectedReports([]);
    else setSelectedReports(reports.map((_, index) => index));
    setSelectAll(!selectAll);
  };

  const handleSelectReport = (index: number) => {
    if (selectedReports.includes(index)) setSelectedReports(selectedReports.filter(i => i !== index));
    else setSelectedReports([...selectedReports, index]);
  };

  const getStatusBadge = (status: string, color: string) => {
    const colors: any = { blue: 'bg-blue-100 text-blue-700 border-blue-200', red: 'bg-red-100 text-red-700 border-red-200', purple: 'bg-purple-100 text-purple-700 border-purple-200' };
    const icons: any = { 'Saved': FileText, 'Processing': Loader, 'Failed': AlertCircle, 'Scheduled': Calendar };
    const Icon = icons[status] || FileText;
    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-sm ${colors[color]}`}>
        <Icon className={`w-4 h-4 ${status === 'Processing' ? 'animate-spin' : ''}`} />
        {status}
      </span>
    );
  };

  return (
    <div className="[grid-area:1_/_2] relative shrink-0 bg-white overflow-auto h-full">
      <div className="px-10 py-8">
        <div className="mb-6">
          <h1 className="text-gray-900 mb-1 text-2xl font-semibold">Reports</h1>
          <p className="text-gray-600">Easily link your data and begin generating insightful reports</p>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" placeholder="" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"><Filter className="w-5 h-5 text-gray-600" /></button>
          <div className="flex-1"></div>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"><Download className="w-5 h-5 text-gray-600" /></button>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"><Trash2 className="w-5 h-5 text-gray-600" /></button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700">Schedule</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300"><Plus className="w-4 h-4" />New report</button>
        </div>

        <div className="border border-gray-300 rounded-lg overflow-hidden bg-gray-100">
          <div className="bg-gray-200 border-b border-gray-300 grid grid-cols-[48px_80px_2fr_1.5fr_1.5fr_1.8fr_1.2fr_48px] gap-4 px-4 py-3">
            <div className="flex items-center justify-center"><input type="checkbox" checked={selectAll} onChange={handleSelectAll} className="w-4 h-4 rounded border-gray-300" /></div>
            <div className="text-gray-700 text-sm font-medium">ID</div>
            <div className="text-gray-700 text-sm font-medium">Name</div>
            <div className="text-gray-700 text-sm font-medium">Owner</div>
            <div className="text-gray-700 text-sm font-medium">Data Source</div>
            <div className="text-gray-700 text-sm font-medium">Last run</div>
            <div className="text-gray-700 text-sm font-medium">Status</div>
            <div className="w-10"></div>
          </div>
          <div className="bg-white">
            {reports.map((report, index) => (
              <div key={index} className="grid grid-cols-[48px_80px_2fr_1.5fr_1.5fr_1.8fr_1.2fr_48px] gap-4 px-4 py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors items-center">
                <div className="flex items-center justify-center">
                  <input type="checkbox" checked={selectedReports.includes(index)} onChange={(e) => { e.stopPropagation(); handleSelectReport(index); }} className="w-4 h-4 rounded border-gray-300" />
                </div>
                <div className="text-gray-600 text-sm cursor-pointer" onClick={() => setSelectedReport(report)}>{report.id}</div>
                <div className="flex flex-col justify-center cursor-pointer" onClick={() => setSelectedReport(report)}>
                  <span className="text-gray-900 font-medium">{report.name}</span>
                  <span className="text-gray-500 text-sm">{report.subtitle}</span>
                </div>
                <div className="text-gray-600 text-sm cursor-pointer" onClick={() => setSelectedReport(report)}>{report.owner}</div>
                <div className="text-gray-600 text-sm cursor-pointer" onClick={() => setSelectedReport(report)}>{report.dataSource}</div>
                <div className="text-gray-600 text-sm cursor-pointer" onClick={() => setSelectedReport(report)}>{report.lastRun}</div>
                <div className="flex items-center cursor-pointer" onClick={() => setSelectedReport(report)}>{getStatusBadge(report.status, report.statusColor)}</div>
                <div className="relative flex justify-center">
                  <button 
                    onClick={(e) => { e.stopPropagation(); const rect = e.currentTarget.getBoundingClientRect(); setMenuPosition({ x: rect.right, y: rect.top }); setOpenMenuIndex(openMenuIndex === index ? null : index); }}
                    className="text-gray-400 hover:text-gray-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>
                  {openMenuIndex === index && <ReportActionsMenu reportName={report.name} position={menuPosition} onClose={() => setOpenMenuIndex(null)} />}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="text-gray-600 text-sm">Showing 1 to 10 of 10</div>
          <div className="flex items-center gap-2">
            <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"><option>10 rows per page</option></select>
            <div className="flex items-center gap-1">
              <button disabled className="px-3 py-1.5 border border-gray-300 rounded-lg transition-colors opacity-50 cursor-not-allowed"><ChevronLeft className="w-4 h-4 text-gray-600" /></button>
              <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg">1</button>
              <button disabled className="px-3 py-1.5 border border-gray-300 rounded-lg transition-colors opacity-50 cursor-not-allowed"><ChevronRight className="w-4 h-4 text-gray-600" /></button>
            </div>
          </div>
        </div>
      </div>
      {selectedReport && <ReportDetailsModal report={selectedReport} onClose={() => setSelectedReport(null)} />}
    </div>
  );
}