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
  EyeOff,
  ArrowRight,
} from "lucide-react";

// 1. Logo Component
function Logo() {
  return (
    <div className="h-[24px] relative w-[20px]">
      {/* Usando a cor primária via classe text-primary se SVG permitir, ou fill direto */}
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 24"
      >
        <path d={svgPaths.p16276a00} fill="#2563eb" />
      </svg>
    </div>
  );
}

// 2. Status Badge Component
function StatusBadge({ status }: { status: string }) {
  const configs: Record<string, { icon: any; styles: string }> =
    {
      Saved: {
        icon: FileText,
        styles: "bg-blue-50 text-blue-700 border-blue-200",
      },
      Processing: {
        icon: Loader,
        styles: "bg-amber-50 text-amber-700 border-amber-200",
      },
      Failed: {
        icon: AlertCircle,
        styles: "bg-red-50 text-red-700 border-red-200",
      },
      Scheduled: {
        icon: Calendar,
        styles:
          "bg-purple-50 text-purple-700 border-purple-200",
      },
    };

  const config = configs[status] || configs["Saved"];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-bold uppercase tracking-wider ${config.styles}`}
    >
      <Icon
        className={`w-3 h-3 ${status === "Processing" ? "animate-spin" : ""}`}
      />
      {status}
    </span>
  );
}

// 3. Navigation Component
function Navigation({
  currentPage,
  onNavigate,
  isExpanded,
  onToggleExpanded,
}: {
  currentPage: string;
  onNavigate: (page: string) => void;
  isExpanded: boolean;
  onToggleExpanded: () => void;
}) {
  const navItems = [
    { icon: TrendingUp, page: "reports", label: "Relatórios" },
    {
      icon: Database,
      page: "data-sources",
      label: "Fontes de Dados",
    },
    { icon: Clock, page: "schedules", label: "Agendamentos" },
  ];

  return (
    <TooltipProvider delayDuration={200}>
      <div className="[grid-area:1_/_1] bg-[#fafafa] relative shrink-0 flex flex-col border-r border-gray-200 transition-all duration-300 overflow-hidden z-20">
        <div
          className={`flex items-center h-[60px] mt-4 mb-6 px-4 ${isExpanded ? "justify-between" : "justify-center"}`}
        >
          <div
            className={`flex items-center transition-all ${isExpanded ? "gap-3" : "gap-0"}`}
          >
            <div className="w-8 flex justify-center shrink-0">
              <Logo />
            </div>
            {isExpanded && (
              <span className="text-gray-900 font-bold tracking-tight text-lg opacity-100 transition-opacity duration-300">
                Yrden
              </span>
            )}
          </div>
          <button
            onClick={onToggleExpanded}
            className="p-1.5 rounded-md hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {isExpanded ? (
              <ChevronLeft className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
        </div>

        <div className="flex flex-col gap-1 px-3">
          {navItems.map((item, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => onNavigate(item.page)}
                  className={`h-10 rounded-lg flex items-center transition-all duration-200 group ${
                    isExpanded
                      ? "px-3 gap-3 w-full"
                      : "justify-center w-10 mx-auto"
                  } ${currentPage === item.page ? "bg-white shadow-sm border border-gray-200 text-blue-600" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"}`}
                >
                  <item.icon
                    className={`w-5 h-5 shrink-0 ${currentPage === item.page ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"}`}
                  />
                  {isExpanded && (
                    <span className="text-sm font-medium whitespace-nowrap">
                      {item.label}
                    </span>
                  )}
                </button>
              </TooltipTrigger>
              {!isExpanded && (
                <TooltipContent
                  side="right"
                  className="font-medium bg-gray-900 text-white border-none ml-2"
                >
                  <p>{item.label}</p>
                </TooltipContent>
              )}
            </Tooltip>
          ))}
        </div>

        {/* User Footer */}
        <div className="mt-auto p-4 border-t border-gray-200 bg-[#fbfbfb]">
          <div
            className={`flex items-center ${isExpanded ? "gap-3" : "justify-center"}`}
          >
            <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200 text-blue-700 font-bold text-xs">
              SG
            </div>
            {isExpanded && (
              <div className="flex flex-col overflow-hidden">
                <span className="text-sm font-bold text-gray-900 truncate">
                  Sofia G.
                </span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider truncate">
                  Momentum Inc.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}

// 4. Main Content Area
function ReportsContent() {
  const reports = [
    {
      id: "DEMO-01",
      name: "Análise de Vendas (Exemplo)",
      subtitle: "Dados fictícios para exploração",
      owner: "Yrden",
      date: "Hoje",
      status: "Saved",
    },
    {
      id: "REAL-01",
      name: "Funil de Conversão Q1",
      subtitle: "Google Analytics 4",
      owner: "Sofia G.",
      date: "Pendente",
      status: "Processing",
    },
  ];

  return (
    <div className="[grid-area:1_/_2] relative bg-white overflow-auto">
      <div className="max-w-6xl mx-auto px-10 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Meus Relatórios
            </h1>
            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-bold border border-blue-100">
              Beta
            </span>
          </div>
          <p className="text-gray-500 max-w-2xl text-base leading-relaxed">
            Gerencie suas análises e dashboards. Enquanto
            sincronizamos seus dados reais, explore nossos
            modelos prontos.
          </p>
        </header>

        {/* Tabela Clean */}
        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
          <div className="bg-gray-50/50 border-b border-gray-200 grid grid-cols-[100px_2fr_1fr_1fr_140px] gap-6 px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            <div>ID</div>
            <div>Nome do Relatório</div>
            <div>Proprietário</div>
            <div>Data</div>
            <div>Status</div>
          </div>
          <div className="divide-y divide-gray-100">
            {reports.map((report, index) => (
              <div
                key={index}
                className="grid grid-cols-[100px_2fr_1fr_1fr_140px] gap-6 px-6 py-5 hover:bg-blue-50/30 transition-colors cursor-pointer group items-center"
              >
                <div className="text-xs font-mono text-gray-400">
                  {report.id}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {report.name}
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {report.subtitle}
                  </p>
                </div>
                <div className="text-sm text-gray-600">
                  {report.owner}
                </div>
                <div className="text-sm text-gray-500">
                  {report.date}
                </div>
                <div>
                  <StatusBadge status={report.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// 5. Sidebar Redesenhada (Quick Start)
function OnboardingSidebar({
  onNavigate,
}: {
  onNavigate?: (page: string) => void;
}) {
  const [isMinimized, setIsMinimized] = useState(false);

  if (isMinimized) {
    return (
      <div className="[grid-area:1_/_3] w-16 bg-white border-l border-gray-200 flex flex-col items-center py-6 transition-all duration-300">
        <button
          onClick={() => setIsMinimized(false)}
          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all mb-4"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 animate-pulse">
          <Zap className="w-4 h-4" />
        </div>
      </div>
    );
  }

  return (
    <div className="[grid-area:1_/_3] w-[360px] bg-white border-l border-gray-200 flex flex-col h-full shadow-[inset_10px_0_20px_-10px_rgba(0,0,0,0.02)] transition-all duration-300 z-10">
      {/* Header da Sidebar */}
      <div className="p-8 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-900 leading-none mb-1">
                Quick Start
              </h2>
              <span className="text-[10px] uppercase tracking-wider font-bold text-blue-600">
                Passo 1 de 2
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsMinimized(true)}
            className="text-gray-300 hover:text-gray-500 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed">
          Sincronizando seu ambiente (estimado: 60 min). Siga o
          guia abaixo para aproveitar esse tempo.
        </p>
      </div>

      {/* Lista de Passos */}
      <div className="flex-1 overflow-y-auto px-8 py-2 space-y-4">
        {/* Passo 1: Ativo */}
        <div
          onClick={() => onNavigate?.("reports")}
          className="group relative bg-white rounded-xl border-2 border-blue-100 p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer overflow-hidden"
        >
          <div className="absolute right-0 top-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRight className="w-4 h-4 text-blue-400" />
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 shrink-0 relative">
              <div className="w-6 h-6 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center z-10 relative">
                <PlayCircle className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
              </div>
              {/* Linha de conexão */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-20 bg-gray-100 -z-0" />
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
                Explorar Demo
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Veja o potencial do Yrden com dados fictícios
                enquanto aguarda.
              </p>
              <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                Recomendado agora
              </div>
            </div>
          </div>
        </div>

        {/* Passo 2: Bloqueado */}
        <div className="group relative bg-gray-50 rounded-xl border border-gray-100 p-5 opacity-70">
          <div className="flex items-start gap-4">
            <div className="mt-1 shrink-0">
              <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-300">
                <Lock className="w-3 h-3" />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-500 mb-1">
                Conectar Fonte Real
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Link Stripe ou Google Analytics. Desbloqueia
                após sincronização.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Suporte */}
      <div className="p-8 mt-auto">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 text-white shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl -translate-y-10 translate-x-10 group-hover:bg-white/10 transition-colors" />

          <div className="flex items-center gap-3 mb-3">
            <div className="p-1.5 bg-white/10 rounded-lg backdrop-blur-sm">
              <HelpCircle className="w-4 h-4 text-blue-300" />
            </div>
            <span className="text-xs font-bold tracking-wide text-gray-300 uppercase">
              Ajuda
            </span>
          </div>

          <p className="text-xs text-gray-300 mb-4 leading-relaxed relative z-10">
            Sofia, se tiver dúvidas durante a configuração,
            chame nosso time.
          </p>

          <button className="w-full py-2.5 bg-white text-gray-900 rounded-lg text-xs font-bold hover:bg-blue-50 transition-colors shadow-sm relative z-10">
            Falar com Especialista
          </button>
        </div>
      </div>
    </div>
  );
}

// 6. CoachMark Component
function CoachMark({ onDismiss }: { onDismiss: () => void }) {
  return (
    <>
      <div
        className="fixed inset-0 bg-gray-900/40 z-40 backdrop-blur-[2px] transition-opacity duration-500 animate-in fade-in"
        onClick={onDismiss}
      />
      {/* Spotlight no Quick Start */}
      <div className="fixed top-0 right-0 bottom-0 w-[360px] z-40 pointer-events-none shadow-[0_0_0_9999px_rgba(17,24,39,0.4)]" />

      <div className="fixed right-[390px] top-28 z-50 animate-in slide-in-from-right-8 duration-500">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-[380px] border border-white/20 relative">
          <button
            onClick={onDismiss}
            className="absolute top-4 right-4 p-1 text-gray-300 hover:text-gray-500 transition-colors rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 rotate-3">
              <Zap className="w-7 h-7 text-white animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Bem-vinda, Sofia!
              </h2>
              <p className="text-xs text-blue-600 font-bold uppercase tracking-wide mt-1">
                Onboarding Iniciado
              </p>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Identificamos que a <strong>Momentum</strong> tem um
            grande volume de dados. A sincronização levará cerca
            de <strong>60 minutos</strong>.
          </p>

          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-6">
            <p className="text-blue-900 text-xs font-medium leading-relaxed">
              💡 <strong>Dica Pro:</strong> Não espere olhando
              para a tela. Use o guia{" "}
              <strong>Quick Start</strong> à direita para
              explorar nossa demo interativa.
            </p>
          </div>

          <button
            onClick={onDismiss}
            className="w-full bg-gray-900 hover:bg-black text-white py-3.5 rounded-xl font-bold text-sm shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Entendi, vamos explorar!
          </button>
        </div>
      </div>
    </>
  );
}

// Main Wrapper
export default function OnboardingExperienceRedesign() {
  const [currentPage, setCurrentPage] = useState("reports");
  const [navExpanded, setNavExpanded] = useState(false);
  const [showCoachMark, setShowCoachMark] = useState(true);

  return (
    <div
      className="bg-white relative w-full h-screen grid transition-all duration-300 font-sans overflow-hidden"
      style={{
        gridTemplateColumns: `${navExpanded ? "240px" : "80px"} 1fr auto`,
      }}
    >
      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        isExpanded={navExpanded}
        onToggleExpanded={() => setNavExpanded(!navExpanded)}
      />

      {currentPage === "reports" ? (
        <ReportsContent />
      ) : (
        <div className="[grid-area:1_/_2] bg-gray-50 flex items-center justify-center text-gray-400">
          Página em construção
        </div>
      )}

      <OnboardingSidebar onNavigate={setCurrentPage} />

      {showCoachMark && (
        <CoachMark onDismiss={() => setShowCoachMark(false)} />
      )}
    </div>
  );
}