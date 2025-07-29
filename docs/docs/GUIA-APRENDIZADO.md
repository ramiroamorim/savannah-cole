# 🎯 Guia de Aprendizado - Como Pensar Como Programador

## **Método "3 Camadas" - Organize sua mente:**

### **1. CONFIGURAÇÃO (mexe 1 vez)**
- `tailwind.config.ts` - "receitas" das cores
- `index.css` - variáveis CSS globais
- **Quando mexer:** só quando quer mudar cor/tema geral

### **2. COMPONENTES (mexe sempre)**
- `/components/` - peças reutilizáveis
- **Quando mexer:** criar novos botões, cards, etc.

### **3. PÁGINAS (mexe sempre)**
- `/pages/` - telas do site
- **Quando mexer:** mudar conteúdo, layout de páginas

---

## **🚀 Roteiro prático para iniciantes:**

### **Passo 1: Sempre comece perguntando:**
```
"O QUE eu quero fazer?"
- Mudar cor → index.css
- Criar botão → /components/
- Mudar página → /pages/
```

### **Passo 2: Use a "Regra do 80/20":**
- **80%** das mudanças = `/components/` e `/pages/`
- **20%** das mudanças = configurações

### **Passo 3: Fluxo mental:**
```
1. "Onde está o problema?" (procure o arquivo)
2. "Que biblioteca usa?" (React, Tailwind, etc.)
3. "Copio algo similar?" (procure componente parecido)
4. "Adapto para minha necessidade"
```

---

## **💡 Como programadores realmente trabalham:**

### **1. Frameworks/Bibliotecas (80% do trabalho)**
- **React**: estrutura dos componentes
- **Tailwind CSS**: classes prontas (`flex`, `bg-primary`, etc.)
- **Shadcn/ui**: componentes prontos (Button, Card, Input)

### **2. Templates/Starters**
```bash
npx create-react-app meu-projeto
# OU
npx create-next-app meu-projeto
```
Já vem com estrutura básica pronta!

### **3. Copy & Paste (muito comum!)**
- Copiar componentes do Shadcn/ui
- Adaptar códigos do Stack Overflow
- Usar templates do GitHub

### **4. Customização (20% do trabalho)**
- Mudar cores (`--primary`)
- Ajustar layout
- Adicionar lógica específica

---

## **📝 Exemplo real:**

### ❌ **NÃO fazem assim (do zero):**
```jsx
function Button() {
  return <div style={{padding: '10px', background: 'blue'}}>Click</div>
}
```

### ✅ **Fazem assim (usando biblioteca):**
```jsx
import { Button } from "shadcn/ui"
<Button className="bg-primary">Click</Button>
```

---

## **🎯 Dica de ouro:**
**Programadores são como "montadores" - pegam peças prontas e juntam para criar algo novo!**

**Sempre comece copiando algo que já funciona e depois vá mudando aos poucos!**

---

## **📂 Estrutura deste projeto:**

```
savannah-cole/
├── client/src/
│   ├── components/     ← 80% do seu trabalho aqui
│   ├── pages/         ← Telas do site
│   ├── index.css      ← Cores e estilos globais
│   └── ...
├── tailwind.config.ts ← Configuração do Tailwind
└── ...
```

---

**Lembre-se:** A programação é mais sobre **entender e adaptar** do que criar tudo do zero!