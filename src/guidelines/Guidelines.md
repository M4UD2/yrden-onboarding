# 🎨 Sistema Cromático & Tokens (Yrden Design Language)

> **Contexto:** SaaS de Data Analytics
> **Filosofia:** "Data First". A interface (Cromada) deve ser silenciosa para que os dados (Conteúdo) gritem.
> **Padrão:** WCAG 2.1 AA (Mínimo) e AAA (Para texto body).

O sistema de cores do Yrden é estritamente **semântico**. Nunca utilizamos cores "cruas" (ex: `blue-500`) diretamente nos componentes. Utilizamos *tokens* que descrevem a **função** da cor. Isso garante consistência, facilita a manutenção e torna o Dark Mode automático e perfeito.

---

## 1. Cores da Marca (Brand Identity)

O "Azul Yrden" foi calibrado para transmitir estabilidade (essencial para dados) e inovação.

| Token Semântico | Variável CSS | Light Mode (Hex) | Dark Mode (Hex) | Função & Uso |
| :--- | :--- | :--- | :--- | :--- |
| **Primary** | `--primary` | `#2563EB` <br>*(Royal Blue)* | `#3B82F6` <br>*(Bright Blue)* | Ação principal (CTAs), estados ativos, focus rings. No Dark Mode, clareamos o tom para garantir contraste contra o fundo escuro. |
| **Primary Foreground** | `--primary-fg` | `#FFFFFF` <br>*(White)* | `#FFFFFF` <br>*(White)* | Texto ou ícone sobre um fundo Primary. |
| **Brand Surface** | `--brand-surface` | `#EFF6FF` <br>*(Pale Blue)* | `#1E293B` <br>*(Slate 800)* | Fundos sutis de destaque (ex: item de menu selecionado, badges). |

---

## 2. Superfícies & Arquitetura (Neutrals)

Para um SaaS de dados, o "branco puro" e o "preto puro" são inimigos da ergonomia visual. Utilizamos a escala **Slate (Cinza Azulado)** para criar uma sensação de tecnologia e profundidade premium.

### Hierarquia de Fundo
| Token | Light Mode | Dark Mode | Aplicação |
| :--- | :--- | :--- | :--- |
| **Background (Canvas)** | `#FFFFFF` | `#0F172A` *(Slate 900)* | A base da página. No escuro, usamos um azul-marinho profundo, nunca preto absoluto (`#000`), para evitar *smearing* em telas OLED e reduzir fadiga. |
| **Surface (Card)** | `#FFFFFF` | `#1E293B` *(Slate 800)* | Cards, Modais, Painéis laterais. No Light Mode, diferencia-se do fundo pela sombra (`shadow`). No Dark Mode, diferencia-se pela cor mais clara. |
| **Surface Overlay** | `#F8FAFC` | `#334155` *(Slate 700)* | Elementos que flutuam sobre cards (ex: Tooltips, Menus Dropdown). |

### Bordas e Divisores
| Token | Light Mode | Dark Mode | Aplicação |
| :--- | :--- | :--- | :--- |
| **Border** | `#E2E8F0` | `#334155` | Bordas padrão de cards e inputs. Sutil, apenas para estrutura. |
| **Border Active** | `#94A3B8` | `#64748B` | Borda ao passar o mouse (Hover) ou foco secundário. |

---

## 3. Tipografia & Conteúdo (Foregrounds)

O texto segue uma escala de contraste rigorosa para garantir legibilidade de dados densos (tabelas e dashboards).

| Token | Light Mode | Dark Mode | Aplicação |
| :--- | :--- | :--- | :--- |
| **Foreground (Main)** | `#0F172A` | `#F8FAFC` | Títulos, Dados essenciais, Texto corrido. Contraste máximo. |
| **Muted (Secondary)** | `#64748B` | `#94A3B8` | Labels, Metadados ("Atualizado há 2h"), Legendas de eixos. |
| **Disabled** | `#CBD5E1` | `#475569` | Texto em botões desativados ou dados indisponíveis. |

---

## 4. Cores de Feedback (Status System)

Essenciais para indicar a saúde dos dados (ex: conexões quebradas, metas batidas). As cores são ajustadas para não "gritarem" excessivamente.

| Token | Cor Base | Significado no Produto | Exemplo de Uso |
| :--- | :--- | :--- | :--- |
| **Success** | `Emerald` | **Saúde Positiva.** Conexão ativa, Sincronização concluída, Crescimento. | Badge "Connected", Toast de Sucesso. |
| **Warning** | `Amber` | **Atenção Necessária.** Conexão instável, Dados desatualizados, Quase no limite. | Alerta de "Token expirando". |
| **Destructive** | `Rose` | **Erro/Perigo.** Falha na sync, Churn, Deletar recurso. | Botão "Delete Workspace", Status "Failed". |
| **Info** | `Sky` | **Neutro.** Notas de atualização, Dicas de onboarding. | Banners informativos. |

> **Nota de Acessibilidade:** Nunca dependa *apenas* da cor para feedback. Use ícones e texto de suporte junto à cor (ex: Ícone de triângulo + Texto "Erro" + Cor Vermelha).

---

## 5. Visualização de Dados (Data Viz Palette)

Esta é a parte mais crítica do Yrden. A paleta de gráficos deve ser distinta o suficiente para que usuários identifiquem categorias diferentes em um gráfico de pizza ou linhas, mas harmônica entre si.

**Regras:**
1.  As cores mantêm a mesma matiz (Hue) no Dark Mode, mas ajustam a luminosidade para brilhar contra o fundo escuro.
2.  A ordem de uso é fixa para garantir consistência.

| Ordem | Token | Família | Uso Ideal |
| :--- | :--- | :--- | :--- |
| **1** | `--chart-1` | **Indigo** | Série principal de dados (ex: Receita Atual). |
| **2** | `--chart-2` | **Cyan** | Série secundária contrastante (ex: Receita Ano Anterior). |
| **3** | `--chart-3` | **Fuchsia** | Terceira categoria (ex: Projeção). |
| **4** | `--chart-4` | **Emerald** | Quarta categoria. |
| **5** | `--chart-5` | **Amber** | Quinta categoria (Destaque/Alerta). |

---

## 6. Sombra e Profundidade (Elevation)

Sombras são usadas para criar hierarquia visual sem poluir a interface com bordas excessivas.

* **Shadow-sm:** Botões, Inputs.
* **Shadow-md:** Cards, Dropdowns.
* **Shadow-xl:** Modais, Painéis flutuantes (Spotlight).
* **Cor da Sombra:** Nunca use preto puro (`#000`). Use uma mistura da cor primária com cinza (`hsl(220 40% 2% / 0.1)`) para uma sombra mais natural e rica ("Umbra").

---

## 7. Boas Práticas de Implementação (Dev Guidelines)

### ✅ O que fazer
* Use `bg-background` e `text-foreground` como padrão para qualquer nova página.
* Use `text-muted-foreground` para qualquer texto que não seja crucial para a leitura imediata (hierarquia visual).
* Use classes de opacidade do Tailwind para variações sutis: `bg-primary/10` é ótimo para fundos de badges.

### ❌ O que não fazer
* **NUNCA** use valores hardcoded (ex: `text-[#333]`). Isso quebra o Dark Mode.
* Não use `text-gray-500` diretamente. Use o token semântico `text-muted-foreground` para garantir que a tonalidade de cinza correta (Slate) seja aplicada.
* Evite fundos coloridos saturados em áreas de texto. Dados precisam de fundo neutro para serem lidos.