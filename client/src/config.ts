/**
 * Configurações centralizadas da aplicação
 * Arquivo que contém todas as constantes, URLs e configurações importantes
 */

// Links externos
export const LINKS = {
  SALES: {
    BUY_URL: "https://pay.hotmart.com/X101063078H?off=juejcbgp&checkoutMode=10"
  }
};

// Cores principais da aplicação
export const COLORS = {
  PRIMARY: "#B80A0AFF",  // Tom de vermelho escuro usado em textos importantes
  PRIMARY_DARK: "#B80A0AFF", // Versão mais escura para hover
  PRIMARY_LIGHT: "#FFF1EE", // Fundo claro para seções destacadas
  SUCCESS: "#57C084", // Verde para botões de ação/compra
  SUCCESS_DARK: "#45A26C", // Verde mais escuro para hover
  WARNING: "#FF9800", // Laranja para bonus e destaques
  ERROR: "#F44336", // Vermelho para alertas e limites
  INFO: "#2196F3", // Azul para informações
  BACKGROUND: "#FFFFFF", // Fundo branco padrão
  TEXT: "#333333", // Texto principal
  BORDER_LIGHT: "#F5DED9" // Bordas claras
};

// Tempos de animações
export const ANIMATIONS = {
  TESTIMONIAL_AUTO_ADVANCE: 5000, // 5 segundos
  CAROUSEL_TRANSITION: 300, // 0.3 segundos
  MIN_SWIPE_DISTANCE: 50 // pixels
};

// Textos compartilhados
export const TEXTS = {
  QUIZ: {
    PROGRESS: "Step {current} of {total}",
    NEXT_BUTTON: "CONTINUE",
    TESTIMONIAL_SWIPE: "Swipe ➤ to see what they say."
  },
  SALES: {
    PRICE: {
      ORIGINAL: "$34",
      CURRENT: "$17",
      REMAINING: "Last 20 units available for only $17!"
    },
    BUY_BUTTON: "I WANT THE PACK FOR $17",
    DELIVERY: "Immediate delivery by email. No subscription. No commitment.",
    BONUSES: [
      {
        title: "🎁 Bonus 1: Smart substitution guide",
        description: "Replace sugar, flour or milk without losing taste."
      },
      {
        title: "🎁 Bonus 2: Natural satiety chart",
        description: "Build plates that satisfy without excess."
      },
      {
        title: "🎁 Bonus 3: Gut + blood sugar protocol",
        description: "Improve your digestion and daily energy."
      },
      {
        title: "🎁 Bonus 4: Smart shopping list",
        description: "Save time with simple, tested, validated products."
      }
    ],
    CLOSING_TEXT: [
      "This is not a diet.",
      "This is not an empty promise.",
      "It's a shortcut to what you've wanted for years:",
      "eating with pleasure, without pain.",
      "And today, it costs you less than a bland restaurant meal."
    ]
  }
};