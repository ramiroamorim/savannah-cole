# 📁 Estrutura do Projeto - Onde Fica Cada Coisa

## **🎯 Localização do arquivo de configuração:**

### **`config.ts` - O Arquivo Mestre**
```
savannah-cole/
└── client/
    └── src/
        └── config.ts  ← AQUI! 🎯
```

**Caminho completo:** `/client/src/config.ts`

---

## **🗂️ Estrutura completa da pasta `src/`:**

```
client/src/
├── config.ts          ← Links, cores, textos (RAIZ das configurações)
├── App.tsx            ← Roteamento das páginas
├── index.css          ← Estilos globais + variáveis CSS
├── main.tsx           ← Ponto de entrada da aplicação
├── components/        ← Componentes reutilizáveis
│   ├── layout/        ← Layouts e estruturas
│   ├── quiz/          ← Componentes do questionário
│   ├── recipe/        ← Componentes de receitas
│   └── ui/            ← Componentes básicos (botões, cards)
├── pages/             ← Páginas do site
│   ├── Home.tsx       ← Página inicial
│   ├── ThankYou.tsx   ← Página de obrigado
│   └── not-found.tsx  ← Página 404
├── data/              ← Dados fixos
│   ├── quiz/          ← Perguntas do questionário
│   └── testimonials/  ← Depoimentos
├── hooks/             ← Lógicas reutilizáveis
├── lib/               ← Utilitários e bibliotecas
└── types/             ← Definições de tipos TypeScript
```

---

## **🔧 Como funciona o sistema de configuração:**

### **1. Arquivo Central** - `config.ts`
```javascript
// Links externos
export const LINKS = {
  SALES: {
    BUY_URL: "https://pay.hotmart.com/..."
  }
};

// Cores principais
export const COLORS = {
  PRIMARY: "#B34431",
  SUCCESS: "#57C084",
  // ...
};

// Textos compartilhados
export const TEXTS = {
  QUIZ: {
    NEXT_BUTTON: "CONTINUE",
  },
  SALES: {
    BUY_BUTTON: "I WANT THE PACK FOR $17",
  }
};
```

### **2. Como usar em qualquer componente:**
```jsx
// Importa do config
import { LINKS, COLORS, TEXTS } from "@/config";

// Usa nas páginas/componentes
const buyUrl = LINKS.SALES.BUY_URL;
const primaryColor = COLORS.PRIMARY;
const buttonText = TEXTS.SALES.BUY_BUTTON;
```

### **3. Fluxo de uso:**
```
config.ts → SalesPage.tsx → Botões de compra
    ↓
Muda 1x no config → Atualiza automaticamente em todo lugar
```

---

## **💡 Por que o `config.ts` fica em `src/`?**

### **Vantagens:**
- ✅ **Acessível** por todos os componentes
- ✅ **Na raiz** do código fonte
- ✅ **Fácil de importar:** `@/config`
- ✅ **Centralizado** - muda 1x, atualiza tudo

### **O que NÃO fica no config:**
- ❌ Estilos CSS (vai para `index.css`)
- ❌ Imagens (vai para `assets/`)
- ❌ Componentes (vai para `components/`)

---

## **🚀 Regra de ouro:**

### **Se você usa o mesmo valor em mais de 1 lugar → Vai para o `config.ts`!**

**Exemplos:**
- URLs de compra
- Cores principais
- Textos de botões
- Preços
- Configurações de API

---

## **📍 Resumo rápido:**
```
config.ts = "Almoxarifado central"
├── LINKS    → URLs e links externos
├── COLORS   → Cores do tema
├── TEXTS    → Textos reutilizáveis
└── ANIMATIONS → Configurações de animação
```

**O `config.ts` é o "arquivo mestre" de configurações do projeto!** 👑