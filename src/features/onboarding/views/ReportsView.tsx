import React, { useState, useMemo, useCallback, lazy, Suspense } from "react";
import { toast } from "sonner";
import {
  Search, Filter, Download, Trash2, Plus, ChevronLeft, ChevronRight,
  MoreVertical, FileText, Loader, AlertCircle, Calendar,
  Edit, Eye, History, Code, Copy, Link2, BarChart3, ChevronDown, Database, X, Check
} from "lucide-react";

// Lazy load heavy components
const ReportActionsMenu = lazy(() => import("../components/ReportActionsMenu"));
const ReportDetailsModal = lazy(() => import("../components/ReportDetailsModal"));

// Types
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

interface MenuItem {
  icon?: any;
  label: string;
  action?: () => void;
  subtitle?: string;
  divider?: boolean;
  danger?: boolean;
}

// Mock data moved to separate file
const reports: Report[] = [
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

// Constants
const STATUS_CONFIG = {
  Saved: { icon: FileText, color: 'bg-blue-100 text-blue-700 border-blue-200' },
  Processing: { icon: Loader, color: 'bg-blue-100 text-blue-700 border-blue-200' },
  Failed: { icon: AlertCircle, color: 'bg-red-100 text-red-700 border-red-200' },
  Scheduled: { icon: Calendar, color: 'bg-purple-100 text-purple-700 border-purple-200' }
} as const;

// Utility functions
const getStatusBadge = (status: string) => {
  const config = STATUS_CONFIG[status as keyof typeof STATUS_CONFIG] || STATUS_CONFIG.Saved;
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-sm ${config.color}`}>
      <Icon className={`w-4 h-4 ${status === 'Processing' ? 'animate-spin' : ''}`} />
      {status}
    </span>
  );
};

// Main component with optimizations
export default function ReportsView() {
  const [selectedReports, setSelectedReports] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  // Memoized computed values
  const isAllSelected = useMemo(() =>
    reports.length > 0 && selectedReports.length === reports.length,
    [selectedReports.length]
  );

  const isIndeterminate = useMemo(() =>
    selectedReports.length > 0 && selectedReports.length < reports.length,
    [selectedReports.length]
  );

  // Memoized handlers
  const handleSelectAll = useCallback(() => {
    if (isAllSelected) {
      setSelectedReports([]);
    } else {
      setSelectedReports(reports.map((_, index) => index));
    }
    setSelectAll(!isAllSelected);
  }, [isAllSelected]);

  const handleSelectReport = useCallback((index: number) => {
    setSelectedReports(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  }, []);

  const handleMenuToggle = useCallback((index: number, rect: DOMRect) => {
    setMenuPosition({ x: rect.right, y: rect.top });
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  }, [openMenuIndex]);

  const handleReportClick = useCallback((report: Report) => {
    setSelectedReport(report);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedReport(null);
  }, []);

  const closeMenu = useCallback(() => {
    setOpenMenuIndex(null);
  }, []);

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
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                checked={isAllSelected}
                ref={(el) => el && (el.indeterminate = isIndeterminate)}
                onChange={handleSelectAll}
                className="w-4 h-4 rounded border-gray-300"
              />
            </div>
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
              <div key={report.id} className="grid grid-cols-[48px_80px_2fr_1.5fr_1.5fr_1.8fr_1.2fr_48px] gap-4 px-4 py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors items-center">
                <div className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    checked={selectedReports.includes(index)}
                    onChange={(e) => { e.stopPropagation(); handleSelectReport(index); }}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                </div>
                <div className="text-gray-600 text-sm cursor-pointer" onClick={() => handleReportClick(report)}>{report.id}</div>
                <div className="flex flex-col justify-center cursor-pointer" onClick={() => handleReportClick(report)}>
                  <span className="text-gray-900 font-medium">{report.name}</span>
                  <span className="text-gray-500 text-sm">{report.subtitle}</span>
                </div>
                <div className="text-gray-600 text-sm cursor-pointer" onClick={() => handleReportClick(report)}>{report.owner}</div>
                <div className="text-gray-600 text-sm cursor-pointer" onClick={() => handleReportClick(report)}>{report.dataSource}</div>
                <div className="text-gray-600 text-sm cursor-pointer" onClick={() => handleReportClick(report)}>{report.lastRun}</div>
                <div className="flex items-center cursor-pointer" onClick={() => handleReportClick(report)}>{getStatusBadge(report.status)}</div>
                <div className="relative flex justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const rect = e.currentTarget.getBoundingClientRect();
                      handleMenuToggle(index, rect);
                    }}
                    className="text-gray-400 hover:text-gray-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>
                  {openMenuIndex === index && (
                    <Suspense fallback={<div className="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>}>
                      <ReportActionsMenu
                        reportName={report.name}
                        position={menuPosition}
                        onClose={closeMenu}
                      />
                    </Suspense>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="text-gray-600 text-sm">Showing 1 to 10 of 10</div>
          <div className="flex items-center gap-2">
            <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>10 rows per page</option>
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

      {selectedReport && (
        <Suspense fallback={
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-7xl max-h-[90vh] flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
          </div>
        }>
          <ReportDetailsModal report={selectedReport} onClose={closeModal} />
        </Suspense>
      )}
    </div>
  );
}
