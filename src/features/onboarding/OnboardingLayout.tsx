import React, { useState } from "react";
import { Toaster } from "sonner";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import ReportsView from "./views/ReportsView";
import DataSourcesView from "./views/DataSourcesView"; // Este será o próximo arquivo a criar
import CoachMark from "./components/CoachMark"; // Opcional: Se você extraiu o CoachMark

export default function OnboardingLayout() {
  // --- MODO DIRETOR 🎬 ---
  // Ajuste estas variáveis para preparar a "cena" da gravação instantaneamente
  const SCENE_CONFIG = {
    initialPage: 'reports',      // Qual tela inicia: 'reports' | 'data-sources' | 'schedules'
    showCoachMark: false,        // Se o balão de dica deve aparecer
    startExpanded: false,        // Se o menu lateral inicia expandido
    bypassLogin: true            // Se true, pula a tela de "Welcome/Login"
  };

  // --- ESTADOS ---
  const [currentPage, setCurrentPage] = useState(SCENE_CONFIG.initialPage);
  const [navExpanded, setNavExpanded] = useState(SCENE_CONFIG.startExpanded);
  const [showCoachMark, setShowCoachMark] = useState(SCENE_CONFIG.showCoachMark);

  // Layout Grid: Menu Esquerdo | Conteúdo | Sidebar Direita
  // Ajusta a largura da coluna 1 baseada na expansão do menu
  const gridLayout = {
    display: 'grid',
    gridTemplateColumns: `${navExpanded ? '240px' : '80px'} 1fr auto`,
    gridTemplateRows: '1fr',
    height: '100vh',
    overflow: 'hidden',
    transition: 'grid-template-columns 300ms ease'
  };

  return (
    <div className="bg-background relative w-full h-full" style={gridLayout}>

      {/* 1. NAVEGAÇÃO (Esquerda) */}
      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        isExpanded={navExpanded}
        onToggleExpanded={() => setNavExpanded(!navExpanded)}
      />

      {/* 2. ÁREA DE CONTEÚDO (Centro) */}
      <div className="relative overflow-hidden bg-background h-full">
        {currentPage === 'reports' && <ReportsView />}

        {currentPage === 'data-sources' && <DataSourcesView />}

        {/* Placeholder para Schedules (se não houver view específica ainda) */}
        {currentPage === 'schedules' && (
           <div className="flex items-center justify-center h-full text-muted-foreground">
             Schedules View (Em construção)
           </div>
        )}
      </div>

      {/* 3. SIDEBAR (Direita - Quick Start) */}
      <Sidebar onNavigate={setCurrentPage} />
      
      {/* EXTRAS */}
      {showCoachMark && (
        <CoachMark onDismiss={() => setShowCoachMark(false)} />
      )}
      
      <Toaster position="top-right" richColors />
    </div>
  );
}
