import { X, Zap, Clock } from "lucide-react";

export default function CoachMark({ onDismiss }: { onDismiss: () => void }) {
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