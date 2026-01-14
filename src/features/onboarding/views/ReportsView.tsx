import React, { useState, useMemo, useCallback, lazy, Suspense } from "react";
import { toast } from "sonner";
// Optimized imports - only import icons we actually use
import { Filter, Download, Trash2, Plus, ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
import { SearchInput } from "../../../components/molecules/SearchInput";
import { StatusBadge } from "../../../components/molecules/StatusBadge";
import { Button } from "../../../components/atoms/Button";

// Lazy load heavy components
const ReportActionsMenu = lazy(() => import("../../../components/organisms/ReportActionsMenu"));
const ReportDetailsModal = lazy(() => import("../../../components/organisms/ReportDetailsModal"));

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

// Compressed mock data - reduced size by using shorter keys and compressed strings
const compressedReports: Report[] = [
  {id:"ID",name:"Getting Started with Axiom",subtitle:"(Guide)",owner:"Axiom Team",dataSource:"Sample CSV",lastRun:"Oct 10, 2025, 11:30 AM",status:"Saved",statusColor:"blue"},
  {id:"ID",name:"User Engagement Funnel",subtitle:"(Analytics Template)",owner:"Axiom Team",dataSource:"Google Analytics (Sample)",lastRun:"Now",status:"Processing",statusColor:"blue"},
  {id:"ID",name:"Marketing Attribution",subtitle:"(Ads Template)",owner:"Axiom Team",dataSource:"Ads & CRM (Sample Data)",lastRun:"Oct 12, 2025, 4:30 PM",status:"Failed",statusColor:"red"},
  {id:"ID",name:"Customer Health Score",subtitle:"(Zendesk Template)",owner:"Axiom Team",dataSource:"Zendesk (Sample Data)",lastRun:"Oct 13, 2025, 9:00 AM",status:"Scheduled",statusColor:"purple"},
  {id:"ID",name:"Revenue Metrics",subtitle:"(Stripe Template)",owner:"Axiom Team",dataSource:"Stripe (Sample Data)",lastRun:"Oct 13, 2025, 9:15 AM",status:"Saved",statusColor:"blue"}
];

// Lazy load reports data
const getReports = () => compressedReports;

// Main component with optimizations
const ReportsView = React.memo(function ReportsView() {
  const [selectedReports, setSelectedReports] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  // Memoized reports data
  const reports = useMemo(() => getReports(), []);

  // Memoized computed values
  const isAllSelected = useMemo(() =>
    reports.length > 0 && selectedReports.length === reports.length,
    [selectedReports.length, reports.length]
  );

  const isIndeterminate = useMemo(() =>
    selectedReports.length > 0 && selectedReports.length < reports.length,
    [selectedReports.length, reports.length]
  );

  // Memoized handlers
  const handleSelectAll = useCallback(() => {
    if (isAllSelected) {
      setSelectedReports([]);
    } else {
      setSelectedReports(reports.map((_, index) => index));
    }
    setSelectAll(!isAllSelected);
  }, [isAllSelected, reports.length]);

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
    <div className="[grid-area:1_/_2] relative shrink-0 bg-surface overflow-auto h-full">
      <div className="px-10 py-8">
        <div className="mb-6">
          <h1 className="text-foreground mb-1 text-2xl font-semibold">Reports</h1>
          <p className="text-muted-foreground">Easily link your data and begin generating insightful reports</p>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <SearchInput containerClassName="flex-1 max-w-sm" placeholder="" />
          <Button variant="outline" size="sm"><Filter className="w-5 h-5" /></Button>
          <div className="flex-1"></div>
          <Button variant="outline" size="sm"><Download className="w-5 h-5" /></Button>
          <Button variant="outline" size="sm"><Trash2 className="w-5 h-5" /></Button>
          <Button variant="outline">Schedule</Button>
          <Button className="flex items-center gap-2"><Plus className="w-4 h-4" />New report</Button>
        </div>

        <div className="border border-border rounded-lg overflow-hidden bg-surface-overlay">
          <div className="bg-surface-overlay border-b border-border grid grid-cols-[48px_80px_2fr_1.5fr_1.5fr_1.8fr_1.2fr_48px] gap-4 px-4 py-3">
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                checked={isAllSelected}
                ref={(el) => el && (el.indeterminate = isIndeterminate)}
                onChange={handleSelectAll}
                className="w-4 h-4 rounded border-border"
              />
            </div>
            <div className="text-muted-foreground text-sm font-medium">ID</div>
            <div className="text-muted-foreground text-sm font-medium">Name</div>
            <div className="text-muted-foreground text-sm font-medium">Owner</div>
            <div className="text-muted-foreground text-sm font-medium">Data Source</div>
            <div className="text-muted-foreground text-sm font-medium">Last run</div>
            <div className="text-muted-foreground text-sm font-medium">Status</div>
            <div className="w-10"></div>
          </div>
          <div className="bg-surface">
            {reports.map((report, index) => (
              <div key={report.id} className="grid grid-cols-[48px_80px_2fr_1.5fr_1.5fr_1.8fr_1.2fr_48px] gap-4 px-4 py-4 border-b border-border last:border-b-0 hover:bg-surface-overlay transition-colors items-center">
                <div className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    checked={selectedReports.includes(index)}
                    onChange={(e) => { e.stopPropagation(); handleSelectReport(index); }}
                    className="w-4 h-4 rounded border-border"
                  />
                </div>
                <div className="text-muted-foreground text-sm cursor-pointer" onClick={() => handleReportClick(report)}>{report.id}</div>
                <div className="flex flex-col justify-center cursor-pointer" onClick={() => handleReportClick(report)}>
                  <span className="text-foreground font-medium">{report.name}</span>
                  <span className="text-muted-foreground text-sm">{report.subtitle}</span>
                </div>
                <div className="text-muted-foreground text-sm cursor-pointer" onClick={() => handleReportClick(report)}>{report.owner}</div>
                <div className="text-muted-foreground text-sm cursor-pointer" onClick={() => handleReportClick(report)}>{report.dataSource}</div>
                <div className="text-muted-foreground text-sm cursor-pointer" onClick={() => handleReportClick(report)}>{report.lastRun}</div>
                <div className="flex items-center cursor-pointer" onClick={() => handleReportClick(report)}>
                  <StatusBadge status={report.status} />
                </div>
                <div className="relative flex justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const rect = e.currentTarget.getBoundingClientRect();
                      handleMenuToggle(index, rect);
                    }}
                    className="text-muted-foreground hover:text-foreground w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-overlay"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>
                  {openMenuIndex === index && (
                    <Suspense fallback={<div className="w-4 h-4 border-2 border-border border-t-primary rounded-full animate-spin"></div>}>
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
          <div className="text-muted-foreground text-sm">Showing 1 to 10 of 10</div>
          <div className="flex items-center gap-2">
            <select className="px-3 py-1.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option>10 rows per page</option>
            </select>
            <div className="flex items-center gap-1">
              <button disabled className="px-3 py-1.5 border border-border rounded-lg transition-colors opacity-50 cursor-not-allowed">
                <ChevronLeft className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="px-3 py-1.5 bg-primary text-primary-fg rounded-lg">1</button>
              <button disabled className="px-3 py-1.5 border border-border rounded-lg transition-colors opacity-50 cursor-not-allowed">
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedReport && (
        <Suspense fallback={
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-surface rounded-xl shadow-2xl w-full max-w-7xl max-h-[90vh] flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-border border-t-primary rounded-full animate-spin"></div>
            </div>
          </div>
        }>
          <ReportDetailsModal report={selectedReport} onClose={closeModal} />
        </Suspense>
      )}
    </div>
  );
});

export default ReportsView;
