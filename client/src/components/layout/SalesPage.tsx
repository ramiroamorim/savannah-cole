import React from "react";
import { LINKS, COLORS, TEXTS } from "@/config";
import {
  expertfechamento2,
  testimonialBrownie, testimonialBread

} from '@/assets/imageExports';
// Importando as imagens diretamente para garantir que o Vite processe corretamente
import recipeBookImage from '@/assets/images/Book/li-book.png';
import recipeBookNewImage from '@/assets/images/images-chck/img-check2.png';
import recipesMainImage from '@/assets/images/recipes/recipes-main.png';
import recipesGridCollageImage from '@/assets/images/recipes/recipe-grid-us.png';

// Objeto modificado com referências diretas
const RecipeImages = {
  book: expertfechamento2,
  main: expertfechamento2,
  gridCollage: recipesGridCollageImage
};

// Componente de botão pulsante verde
const GreenPulseButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <div className="relative inline-block w-full md:w-auto mb-4">
      <div className="absolute inset-0 rounded-full opacity-30" 
        style={{
          backgroundColor: COLORS.SUCCESS,
          animation: "ping 3s cubic-bezier(0.66, 0, 0, 1) infinite"
        }}
      ></div>
      <a 
        href={href}
        target="_blank" 
        rel="noopener noreferrer"
        className="relative inline-block w-full py-3 sm:py-4 px-6 sm:px-10 text-base sm:text-lg font-bold rounded-full text-white"
        style={{ 
          backgroundColor: COLORS.SUCCESS,
          boxShadow: `0 4px 10px rgba(87, 192, 132, 0.3)`,
          transition: "background-color 0.3s ease"
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = COLORS.SUCCESS_DARK}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = COLORS.SUCCESS}
      >
        {children}
      </a>
    </div>
  );
};

// Componente para exibir a seção de preço e botão de compra
const PriceSection = ({ buyUrl }: { buyUrl: string }) => (
  <div className="py-5 sm:py-6 px-4 sm:px-6 text-center mb-6 sm:mb-8 rounded-lg border" 
    style={{ 
      backgroundColor: "#FFF5F5", 
      borderColor: "#FFE5E5" 
    }}>
    <p style={{ fontSize: "1.05rem", marginBottom: "0.5rem" }}>Real value of the pack: <span className="line-through">$34</span></p>
    <p style={{ fontSize: "1.35rem", fontWeight: "bold", color: COLORS.PRIMARY, marginBottom: "1rem" }}>Today: only $17</p>
    <p style={{ fontSize: "1.05rem", fontWeight: "bold", color: COLORS.ERROR, marginBottom: "1.5rem" }}>⚠️ Last 20 units available for only $17!</p>
    
    <GreenPulseButton href={buyUrl}>
      I WANT THE PACK FOR $17
    </GreenPulseButton>
    
    <p style={{ fontSize: "1.05rem" }}>📩 Immediate delivery by email. No subscription. No commitment.</p>
  </div>
);

export default function SalesPage() {
  // Usando a URL do botão de compra do arquivo centralizado de configurações
  const buyUrl = LINKS.SALES.BUY_URL;
  
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[500px] mx-auto px-3 sm:px-4 py-6 sm:py-8 text-[#333]">
        {/* Cabeçalho da página */}
        <div className="bg-[#FFF8F5] p-4 sm:p-6 rounded-md mb-6 sm:mb-8">
          <h1 style={{ 
            fontFamily: "Georgia, 'Times New Roman', serif", 
            fontStyle: "italic",
            color: "#B80A0AFF",
            fontSize: "1.5rem",
            lineHeight: "1.4",
            marginBottom: "1rem",
            fontWeight: "normal"
          }}>
            <span className="block">500 sugar-free, gluten-free</span>
            <span className="block">and lactose-free recipes</span>
            <span className="block">that nourish, help you lose weight</span>
            <span className="block">with pleasure</span>
            <span className="block">and rebalance your body.</span>
          </h1>

          <div className="mt-3 sm:mt-4">
            <p className="mb-2 text-xs sm:text-sm">No fad diets. No impossible-to-find ingredients. No sad dishes.</p>
            <p className="mb-2 text-xs sm:text-sm">Only <strong>real, flavorful and liberating</strong> cuisine — for women with restrictions who still want to <strong>enjoy food without fear.</strong></p>
          </div>
        </div>

        {/* Imagem única da grade de receitas conforme a referência */}
        <div className="mb-8 border border-gray-200 rounded-md overflow-hidden">
          <img 
            src={RecipeImages.gridCollage} 
            alt="Collection of sugar-free, gluten-free and lactose-free recipes"
            className="w-full h-auto"
          />
        </div>

        {/* Pour qui c'est: section */}
        <div className="mb-5 sm:mb-6 p-3 sm:p-4 rounded-md border-l-4 bg-[#F1F9F1] border-[#57C084]">
          <h3 style={{
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "1.05rem",
            fontWeight: "700",
            color: "#57C084",
            marginBottom: "10px"
          }}>💚 Who this is for:</h3>
          <ul style={{
            listStyle: "none",
            padding: "0 0 0 4px",
            margin: "0",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "0.95rem",
            lineHeight: "1.8"
          }}>
            <li>🌿 Women with intolerances (gluten, lactose, sugar)</li>
            <li>🥗 Those who want to lose weight without frustration</li>
            <li>😩 Those tired of sad and tasteless dishes</li>
            <li>✨ Those who want a simple and sustainable method</li>
          </ul>
        </div>

        {/* Pour qui ce n'est pas: section */}
        <div style={{
          backgroundColor: "#FFF5F5",
          marginBottom: "20px",
          padding: "14px 16px",
          borderRadius: "8px",
          borderLeft: "4px solid #F44336"
        }}>
          <h3 style={{
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "1.05rem",
            fontWeight: "700",
            color: "#F44336",
            marginBottom: "10px"
          }}>🚫 Who this is NOT for:</h3>
          <ul style={{
            listStyle: "none",
            padding: "0 0 0 4px",
            margin: "0",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "0.95rem",
            lineHeight: "1.8"
          }}>
            <li>🙅‍♀️ Those who don't want to change their habits</li>
            <li>🧪 Those looking for a magic solution</li>
            <li>🌀 Those who prefer to stay in chaos</li>
            <li style={{ 
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
              fontSize: "0.95rem"
            }}>🍕 Those who refuse to cook even a little</li>
          </ul>
        </div>

        {/* Recettes exclusives section */}
        <div style={{
          backgroundColor: "#FFF1EE", 
          padding: "24px 16px",
          marginBottom: "20px",
          borderRadius: "12px",
          border: "1px solid #F5DED9",
          borderLeft: "4px solid #B34431"
        }}>
          <p style={{ 
            fontFamily: "Georgia, serif", 
            fontStyle: "italic",
            color: "#B34431",
            fontSize: "1.05rem",
            lineHeight: "1.3",
            marginBottom: "16px",
            textAlign: "center",
            fontWeight: "bold"
          }}>
            You won't find these recipes on Google.
          </p>
          <p style={{ 
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "0.95rem",
            lineHeight: "1.6",
            textAlign: "center",
            color: "#333333",
            margin: "0"
          }}>
            They were born in Savannah's real kitchen — not on Pinterest, nor in a copy-paste blog. Each dish was designed to <span style={{ fontWeight: "700" }}>soothe, nourish</span>... and bring back <span style={{ fontWeight: "700" }}>pleasure</span> to those who had given up.
          </p>
        </div>
        

        

        


        {/* Imagem Expert Fechamento */}
        <div className="mb-4 sm:mb-5 overflow-hidden">
          <img 
            src={expertfechamento2}
            alt="Expert closing"
            className="w-full h-auto rounded-xl shadow-lg"
            style={{ 
              border: "1px solid #f0f0f0",
              maxWidth: "100%",
              display: "block",
              margin: "0 auto"
            }}
          />
        </div>

        {/* Ce que vous allez recevoir section */}
        <div className="mb-5 sm:mb-6 p-3 sm:p-4 rounded-md border-l-4 bg-[#F5F9FF] border-[#2196F3]">
          <h2 style={{ 
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "1.05rem", 
            fontWeight: "700", 
            color: "#2196F3", 
            marginBottom: "10px" 
          }}>📦 What you will receive:</h2>
          <p style={{ 
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "0.95rem", 
            marginBottom: "10px",
            lineHeight: "1.8"
          }}>Access to <span style={{ color: "#B34431", fontWeight: "bold" }}>500 exclusive recipes</span> created and tested by Chef Savannah — organized to nourish, soothe and delight your daily life.</p>
          
          <ul style={{
            listStyle: "none",
            padding: "0 0 0 4px",
            margin: "0",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "0.95rem",
            lineHeight: "1.8"
          }}>
            <li>🍽️ <span style={{ color: "#B34431", fontWeight: "bold" }}>100 breakfasts & snacks</span> — to start the day right, without sugar spikes</li>
            <li>🥦 <span style={{ color: "#B34431", fontWeight: "bold" }}>300 lunches & dinners</span> — easy, nourishing and balanced, for every day</li>
            <li>🍫 <span style={{ color: "#B34431", fontWeight: "bold" }}>100 gourmet desserts</span> — without refined sugar, but full of pleasure</li>
            <li>🧭 <span style={{ color: "#B34431", fontWeight: "bold" }}>Recipes organized by goal</span>: digestion, satiety, inflammation, energy</li>
          </ul>
        </div>



        {/* Bonus exclusifs section */}
        <div className="mb-5 sm:mb-6 p-3 sm:p-4 rounded-md border-l-4 bg-[#FFF8E8] border-[#FF9800]">
          <h2 style={{ 
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "1.05rem", 
            fontWeight: "700", 
            color: "#FF9800", 
            marginBottom: "10px" 
          }}>🎁 Exclusive bonuses included today:</h2>
          
          <ul style={{
            listStyle: "none",
            padding: "0",
            margin: "0",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
          }}>
            <li style={{ marginBottom: "12px" }}>
              <p style={{ fontSize: "0.95rem", fontWeight: "bold", margin: "0 0 4px 0", lineHeight: "1.8" }}>🎁 Bonus 1: Smart substitution guide</p>
              <p style={{ fontSize: "0.95rem", marginLeft: "1rem", margin: "0", lineHeight: "1.8" }}>Replace sugar, flour or milk without losing taste.</p>
            </li>
            <li style={{ marginBottom: "12px" }}>
              <p style={{ fontSize: "0.95rem", fontWeight: "bold", margin: "0 0 4px 0", lineHeight: "1.8" }}>🎁 Bonus 2: Natural satiety chart</p>
              <p style={{ fontSize: "0.95rem", marginLeft: "1rem", margin: "0", lineHeight: "1.8" }}>Build plates that satisfy without excess.</p>
            </li>
            <li style={{ marginBottom: "12px" }}>
              <p style={{ fontSize: "0.95rem", fontWeight: "bold", margin: "0 0 4px 0", lineHeight: "1.8" }}>🎁 Bonus 3: Gut + blood sugar protocol</p>
              <p style={{ fontSize: "0.95rem", marginLeft: "1rem", margin: "0", lineHeight: "1.8" }}>Improve your digestion and daily energy.</p>
            </li>
            <li style={{ marginBottom: "0" }}>
              <p style={{ fontSize: "0.95rem", fontWeight: "bold", margin: "0 0 4px 0", lineHeight: "1.8" }}>🎁 Bonus 4: Smart shopping list</p>
              <p style={{ fontSize: "0.95rem", marginLeft: "1rem", margin: "0", lineHeight: "1.8" }}>Save time with simple, tested, validated products.</p>
            </li>
          </ul>
        </div>

        {/* Texto adicional conforme a referência */}
        <div style={{
          backgroundColor: "#FFF9F3", 
          padding: "24px 16px",
          marginBottom: "24px",
          borderRadius: "12px",
          border: "1px solid #F5E9DE",
          borderLeft: "4px solid #B34431"
        }}>
          <p style={{ 
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "0.95rem",
            lineHeight: "1.8",
            color: "#333333",
            marginBottom: "12px",
            fontWeight: "normal"
          }}>
            This is not a diet. This is not an empty promise.
          </p>
          <p style={{ 
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "0.95rem",
            lineHeight: "1.8",
            color: "#333333",
            marginBottom: "12px",
            fontWeight: "normal"
          }}>
            It's a shortcut to what you've wanted for years: <span style={{ color: "#B34431", fontWeight: "600" }}>eating with pleasure, without pain.</span>
          </p>
          <p style={{ 
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "0.95rem",
            lineHeight: "1.8",
            color: "#333333",
            marginBottom: "0",
            fontWeight: "normal"
          }}>
            And today, it costs you less than a bland restaurant meal.
          </p>
        </div>
        
        {/* Imagem Expert Fechamento 2 */}
        <div className="mb-5 sm:mb-6 overflow-hidden">
          <img 
            src={recipeBookNewImage}
            alt="Expert closing 2"
            className="w-full h-auto rounded-xl shadow-lg"
            style={{ 
              border: "1px solid #f0f0f0",
              maxWidth: "100%",
              display: "block",
              margin: "0 auto"
            }}
          />
        </div>

        {/* Seção de preço e compra */}
        <PriceSection buyUrl={buyUrl} />

        {/* Duas imagens de testemunhos/mensagens */}
        <div className="mb-5 sm:mb-6 space-y-3 sm:space-y-4">
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <img 
              src={testimonialBrownie}
              alt="Client testimonial - gluten-free bread"
              className="w-full h-auto"
            />
          </div>
          
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <img 
              src={testimonialBread}
              alt="Client testimonial - sugar-free brownie"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Seção final de preço e compra */}
        <PriceSection buyUrl={buyUrl} />

        {/* Assinatura da Chef */}
        <div className="text-center mb-6 mt-12 pt-4 pb-2" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ 
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "0.95rem", 
            marginBottom: "10px", 
            color: "#666666", 
            lineHeight: "1.8"
          }}>
            With all my heart — so you can finally eat with freedom and pleasure.
          </p>
          <p style={{ 
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "1.05rem", 
            fontStyle: "italic", 
            fontWeight: "500", 
            color: "#B34431"
          }}>
            Chef Savannah Cole
          </p>
        </div>
      </div>
    </div>
  );
}
