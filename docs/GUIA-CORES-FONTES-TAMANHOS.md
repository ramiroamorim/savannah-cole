# Guia de Cores, Fontes e Tamanhos

## Onde Controlar os Estilos no Projeto

### 🎨 **Cores - 100% controladas no `client/src/index.css`**

#### Formato HSL (não hexadecimal #)
As cores estão definidas no formato HSL (Hue, Saturation, Lightness):
- **Primeiro número** = Matiz (Hue) - a cor base (0-360°)
- **Segundo número** = Saturação (Saturation) - intensidade da cor (0-100%)  
- **Terceiro número** = Luminosidade (Lightness) - quão clara/escura é (0-100%)

#### Exemplo de conversão:
- `350 77% 44%` = `#C51A38` (vermelho-rosado)
- `14 82% 53%` = `#E05B2D` (coral/laranja)

#### Principais variáveis de cor (linhas 13-64):
```css
:root {
  --primary: 350 77% 44%;           /* Cor principal */
  --primary-foreground: 60 9.1% 97.8%; /* Texto sobre cor principal */
  --background: 0 0% 100%;          /* Fundo */
  --foreground: 20 14.3% 4.1%;     /* Texto principal */
  --border: 20 5.9% 90%;           /* Bordas */
  /* ... outras cores ... */
}
```

### 🔤 **Fontes - 100% controladas no `client/src/index.css`**

#### Configuração principal (linhas 73-82):
```css
body {
  font-family: 'Merriweather', serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Merriweather', serif;
}

.font-serif {
  font-family: 'Merriweather', serif;
}
```

### 📏 **Tamanhos - Divididos entre arquivos**

#### ✅ **Controlados no `index.css`:**
- **Raio de bordas customizado:**
  ```css
  --radius: 0.5rem;
  ```

- **Tamanhos específicos de componentes:**
  ```css
  .landing-page h1 {
    @apply text-3xl md:text-6xl; /* Tamanhos específicos */
  }
  
  .quiz-container {
    @apply max-w-[600px]; /* Largura máxima customizada */
  }
  ```

#### ❌ **NÃO controlados no `index.css` (vêm do Tailwind padrão):**
- Classes como: `text-sm`, `text-lg`, `p-4`, `m-8`, `w-full`, etc.
- Para customizar estes, edite o `tailwind.config.ts`

### 🎭 **Componentes Customizados - 100% no `index.css`**

#### Exemplos (linhas 86-302):
```css
.btn-primary {
  @apply text-white font-medium py-3 px-4 rounded-full;
  background: linear-gradient(90deg, #b80a0a 0%, #c51a38 100%);
}

.radio-option {
  @apply block w-full rounded-full p-3 sm:p-4 cursor-pointer;
}

.testimonial {
  @apply relative bg-white rounded-xl p-2 sm:p-4;
}
```

## 🔧 **Como Fazer Alterações**

### Para mudar cores:
1. Abra `client/src/index.css`
2. Encontre a variável desejada (ex: `--primary`)
3. Altere usando formato HSL: `350 77% 44%`

### Para mudar fontes:
1. Abra `client/src/index.css`
2. Altere a `font-family` nas seções desejadas

### Para mudar tamanhos:
- **Específicos**: Edite as classes customizadas no `index.css`
- **Globais do Tailwind**: Edite o `tailwind.config.ts`

## 💡 **Dica importante:**
Use sempre o formato HSL sem `hsl()` para as cores, pois é assim que o Tailwind processa as variáveis CSS!