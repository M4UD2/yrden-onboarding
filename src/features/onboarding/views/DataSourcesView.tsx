import { useState } from "react";
import { toast } from "sonner";
import { 
  Search, FileText, Smartphone, Cloud, Database, Upload, X, Check, 
  ChevronRight, ChevronDown 
} from "lucide-react";

// --- COMPONENTES AUXILIARES ---

function FileUploadModal({ onClose, onUploadComplete }: { onClose: () => void; onUploadComplete: (file: any) => void }) {
  const [step, setStep] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadingFile, setUploadingFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  
  // Estados do Passo 2 (Configuração)
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
    if (e.dataTransfer.files.length > 0) handleFileSelect(e.dataTransfer.files[0]);
  };

  const generateMockData = (fileName: string) => {
    setTableName(fileName.replace(/\.(csv|xlsx|json)$/i, ''));
    
    // Dados falsos para preview
    setPreviewData([
      { sale_date: "2025-01-15", product_name: "Laptop Pro", amount: "1299.99", quantity: "2", customer: "Ana Silva" },
      { sale_date: "2025-01-16", product_name: "Mouse Wireless", amount: "29.99", quantity: "5", customer: "João Santos" },
      { sale_date: "2025-01-17", product_name: "Teclado Mecânico", amount: "149.99", quantity: "1", customer: "Maria Costa" },
      { sale_date: "2025-01-18", product_name: "Monitor 4K", amount: "599.99", quantity: "3", customer: "Pedro Lima" },
      { sale_date: "2025-01-19", product_name: "Webcam HD", amount: "89.99", quantity: "2", customer: "Carla Souza" },
    ]);

    setColumns([
      { name: "sale_date", type: "date" },
      { name: "product_name", type: "text" },
      { name: "amount", type: "number" },
      { name: "quantity", type: "number" },
      { name: "customer", type: "text" },
    ]);
  };

  const handleFileSelect = (file: File) => {
    setUploadingFile(file);
    setIsUploading(true);
    
    // Simulação de upload
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 20;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsUploading(false);
          generateMockData(file.name);
          setStep(2);
        }, 500);
      }
      setUploadProgress(Math.min(progress, 100));
    }, 150);
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
    setTimeout(() => toast.success(`✓ Sucesso! A fonte de dados "${tableName}" foi adicionada.`), 300);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl mx-4 max-h-[90vh] flex flex-col transition-all duration-300" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-gray-900 font-semibold text-lg">{step === 1 ? 'Adicionar seu arquivo' : 'Configurar seus dados'}</h2>
            <p className="text-gray-600 text-sm mt-1">{step === 1 ? 'Faça upload de arquivos CSV, Excel (.xlsx) ou JSON' : 'Revise e confirme as configurações dos seus dados'}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          {step === 1 && !isUploading && (
            <div
              onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors cursor-pointer ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'}`}
              onClick={() => document.getElementById('file-input')?.click()}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4"><Upload className="w-8 h-8 text-gray-400" /></div>
                <h3 className="text-gray-900 mb-2 font-medium">{isDragging ? 'Solte o arquivo aqui' : 'Arraste e solte seu arquivo aqui'}</h3>
                <p className="text-gray-600 text-sm mb-4">ou</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300">Ou procure em seu computador</button>
                <div className="mt-6 text-sm text-gray-500 space-y-1"><p>Formatos suportados: CSV, Excel (.xlsx), JSON</p><p>Tamanho máximo do arquivo: 100MB</p></div>
              </div>
              <input id="file-input" type="file" accept=".csv,.xlsx,.json" className="hidden" onChange={(e) => e.target.files && e.target.files.length > 0 && handleFileSelect(e.target.files[0])} />
            </div>
          )}

          {step === 1 && isUploading && (
            <div className="py-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0"><FileText className="w-6 h-6 text-blue-600" /></div>
                <div className="flex-1 min-w-0"><h3 className="text-gray-900 truncate font-medium">{uploadingFile?.name}</h3><p className="text-gray-600 text-sm">{uploadingFile && `${(uploadingFile.size / 1024).toFixed(2)} KB`}</p></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm"><span className="text-gray-600">Enviando...</span><span className="text-gray-900">{Math.round(uploadProgress)}%</span></div>
                <div className="bg-gray-200 h-2 rounded-full overflow-hidden"><div className="bg-blue-600 h-full rounded-full transition-all duration-300" style={{ width: `${uploadProgress}%` }} /></div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-gray-900 mb-3 font-medium">Pré-visualização dos Dados</h3>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-100 border-b border-gray-200">
                        <tr>{Object.keys(previewData[0] || {}).map((header, idx) => <th key={idx} className="px-4 py-3 text-left text-gray-700 font-medium">{header}</th>)}</tr>
                      </thead>
                      <tbody className="bg-white">
                        {previewData.map((row, rowIdx) => (
                          <tr key={rowIdx} className="border-b border-gray-200 last:border-b-0">
                            {Object.values(row).map((cell: any, cellIdx) => <td key={cellIdx} className="px-4 py-3 text-gray-600">{cell}</td>)}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-gray-900 font-medium">Opções Inteligentes</h3>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Nome da Tabela</label>
                  <input type="text" value={tableName} onChange={(e) => setTableName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ex: vendas_q4_2025" />
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="use-header" checked={useFirstRowAsHeader} onChange={(e) => setUseFirstRowAsHeader(e.target.checked)} className="w-4 h-4 rounded border-gray-300" />
                  <label htmlFor="use-header" className="text-sm text-gray-700">Usar a primeira linha como cabeçalho</label>
                </div>
              </div>

              <div>
                <h3 className="text-gray-900 mb-3 font-medium">Mapeamento de Tipos</h3>
                <div className="space-y-3">
                  {columns.map((col, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">{col.name}</div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                      <div className="flex-1 relative">
                        <select 
                          value={col.type} 
                          onChange={(e) => { const newCols = [...columns]; newCols[idx].type = e.target.value; setColumns(newCols); }}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                        >
                          <option value="text">Texto</option><option value="number">Número</option><option value="date">Data</option><option value="boolean">Booleano</option>
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

        {step === 2 && (
          <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
            <button onClick={onClose} className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700">Cancelar</button>
            <button onClick={handleComplete} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-300"><Check className="w-4 h-4" />Concluir e Sincronizar</button>
          </div>
        )}
      </div>
    </div>
  );
}

// --- COMPONENTE PRINCIPAL ---

export default function DataSourcesView() {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [connectedSources, setConnectedSources] = useState([
    { name: "Vendas 2024", type: "CSV", lines: "1.2k lines", owner: "Jorge Ventura", lastSync: "2 horas atrás", status: "Active" },
    { name: "Google Analytics", type: "Integration", lines: "2.4M registros", owner: "Sofia", lastSync: "Sincronizando agora", status: "Syncing" }
  ]);

  const dataSourceTypes = [
    { icon: <FileText className="w-9 h-9 text-gray-600" />, title: "File Uploads", description: "CSV, Microsoft Excel (.xlsx), JSON", onClick: () => setShowUploadModal(true) },
    { icon: <Smartphone className="w-9 h-9 text-gray-600" />, title: "Applications & SaaS", description: "Stripe, Salesforce, Zendesk, Google Analytics, Google Ads, Facebook Ads" },
    { icon: <Cloud className="w-9 h-9 text-gray-600" />, title: "Cloud Storage", description: "Google Drive, OneDrive, Dropbox, Google Cloud Storage, Amazon S3" },
    { icon: <Database className="w-9 h-9 text-gray-600" />, title: "Databases", description: "PostgreSQL, MySQL, MongoDB, SQL Server" }
  ];

  return (
    <div className="[grid-area:1_/_2] relative shrink-0 bg-white overflow-y-auto h-full">
      <div className="px-10 py-8">
        <div className="mb-8">
          <h1 className="text-gray-900 mb-1 text-2xl font-semibold">Data Sources</h1>
          <p className="text-gray-600">Connect your data simply and start creating reports</p>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search..." className="w-full max-w-sm pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="mb-8">
          <h2 className="text-gray-900 mb-4 font-medium text-lg">Connect new source</h2>
          <div className="grid grid-cols-2 gap-4">
            {dataSourceTypes.map((source, index) => (
              <button key={index} onClick={source.onClick} className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-left hover:bg-gray-100 hover:border-gray-300 transition-all group">
                <div className="mb-3">{source.icon}</div>
                <h3 className="text-gray-900 mb-1 font-medium">{source.title}</h3>
                <p className="text-gray-600 text-sm">{source.description}</p>
              </button>
            ))}
          </div>
        </div>
        
        {showUploadModal && <FileUploadModal onClose={() => setShowUploadModal(false)} onUploadComplete={(data) => setConnectedSources([data, ...connectedSources])} />}

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-900 font-medium text-lg">Connected sources</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Search..." className="pl-9 pr-4 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div className="space-y-3">
            {connectedSources.map((source, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center"><FileText className="w-6 h-6 text-gray-600" /></div>
                    <div>
                      <h3 className="text-gray-900 mb-1 font-medium">{source.name}</h3>
                      <p className="text-gray-600 text-sm">{source.type} - {source.lines}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="mb-2">
                      <span className={`text-xs px-3 py-1 rounded-full ${source.status === "Active" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-600"}`}>{source.status}</span>
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