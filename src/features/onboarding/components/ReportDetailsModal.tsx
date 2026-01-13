import React, { useState } from "react";
import { toast } from "sonner";
import { Edit, Copy, FileText, BarChart3, ChevronDown, Database, X, Check, Code } from "lucide-react";

interface Report {
  id: string;
  name: string;
  subtitle: string;
  owner: string;
  dataSource: string;
  lastRun: string;
  status: string;
  statusColor: string;
}

interface ReportDetailsModalProps {
  report: Report;
  onClose: () => void;
}

export default function ReportDetailsModal({ report, onClose }: ReportDetailsModalProps) {
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
