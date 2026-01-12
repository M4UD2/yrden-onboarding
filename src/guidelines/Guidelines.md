# Yrden Design Guidelines

Diretrizes para manter a consistência e autoridade visual da plataforma de BI Yrden, focando na jornada da Sofia.

## 1. Princípios de Layout
* **Estrutura de 3 Colunas:** Manter sempre a hierarquia `Navegação (80px/240px) | Conteúdo Principal | Sidebar de Onboarding`.
* **Densidade de Dados:** Utilizar `text-sm` (14px) em tabelas para suportar grandes volumes de informação sem poluição.
* **Espaçamento Premium:** Headers de página devem usar `px-10 py-8` para dar respiro e foco estratégico antes da densidade técnica.

## 2. Componentes e Interação
* **Estados de Dados (Non-Generic):** Evitar apenas cores. Usar ícones semânticos para status:
  * `Processing`: Loader animado + Azul.
  * `Failed`: AlertCircle + Vermelho.
  * `Saved/Success`: FileText/Check + Azul/Verde.
* **Feedback Contextual:** Todo o elemento colapsado ou ícone abstrato deve ter `Tooltip` com `delayDuration={200}`.
* **Suavidade:** Transições de colapso de menu e modais devem usar `transition-all duration-300`.

## 3. Identidade e Estilo
* **Paleta de Ação:** Usar `blue-600` para ações primárias e `blue-50` para áreas de suporte e aprendizagem (Onboarding).
* **CoachMarks Humano:** Modais de boas-vindas devem usar cantos arredondados (`rounded-xl`) e sombras profundas (`shadow-2xl`) para contrastar com a rigidez da grelha de dados.
* **Iconografia:** Uso exclusivo da biblioteca `lucide-react` para manter a consistência técnica.

## 4. UX Writing & Estratégia
* **Transparência Técnica:** Nunca esconder a espera de 60 minutos. Transformar a limitação em valor: "Sincronizando seu workspace..." em vez de "Carregando...".
* **Foco no Aha! Moment:** Priorizar verbos de benefício no Onboarding. Ex: "Explore o poder do Yrden" em vez de "Abrir Demo".
* **Recompensa > Esforço:** Garantir que a Sofia veja um relatório pronto antes de pedir que conecte uma fonte de dados real.