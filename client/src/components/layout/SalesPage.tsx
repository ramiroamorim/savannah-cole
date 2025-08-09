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
    <p style={{ fontSize: "1.05rem", marginBottom: "0.5rem" }}>Valor real del paquete: <span className="line-through">$34</span></p>
    <p style={{ fontSize: "1.35rem", fontWeight: "bold", color: COLORS.PRIMARY, marginBottom: "1rem" }}>Hoy: solo por $17</p>
    <p style={{ fontSize: "1.05rem", fontWeight: "bold", color: COLORS.ERROR, marginBottom: "1.5rem" }}>⚠️ Solo quedan 20 unidades, por solo $17!</p>
    
    <GreenPulseButton href={buyUrl}>
      QUIERO EL PACK POR $17
    </GreenPulseButton>
    
    <p style={{ fontSize: "1.05rem" }}>📩 Entrega inmediata por correo electrónico. Sin suscripción. Sin compromiso.</p>
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
            <span className="block">500 sin azúcar y sin gluten</span>
            <span className="block">y recetas sin lactosa</span>
            <span className="block">que nutren y te ayudan a bajar de peso</span>
            <span className="block">con placer</span>
            <span className="block">y reequilibran tu cuerpo.</span>
          </h1>

          <div className="mt-3 sm:mt-4">
            <p className="mb-2 text-xs sm:text-sm">Sin dietas de moda. Sin ingredientes imposibles de encontrar. Sin platos tristes.</p>
            <p className="mb-2 text-xs sm:text-sm">Solo <strong>cocina real, llena de sabor y liberadora</strong>  para mujeres con restricciones que aún quieren disfrutar de la comida <strong>sin miedo</strong></p>
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
          }}>💚 Para quién es:</h3>
          <ul style={{
            listStyle: "none",
            padding: "0 0 0 4px",
            margin: "0",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "0.95rem",
            lineHeight: "1.8"
          }}>
            <li>🌿 Mujeres con intolerancias (gluten, lactosa, azúcar)</li>
            <li>🥗 Quienes quieren bajar de peso sin frustraciones</li>
            <li>😩 Quienes están cansadas de platos tristes y sin sabor</li>
            <li>✨ Quienes buscan un método simple y sostenible</li>
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
          }}>🚫 Para quién NO es:</h3>
          <ul style={{
            listStyle: "none",
            padding: "0 0 0 4px",
            margin: "0",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "0.95rem",
            lineHeight: "1.8"
          }}>
            <li>🙅‍♀️ Mujeres que no quieren cambiar sus hábitos</li>
            <li>🧪 Mujeres que buscan una solución mágica</li>
            <li>🌀 Mujeres que prefieren quedarse en el caos</li>
            <li style={{ 
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
              fontSize: "0.95rem"
            }}>🍕 Mujeres que se niegan a cocinar aunque sea un poco</li>
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
            No encontrarás estas recetas en Google.
          </p>
          <p style={{ 
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "0.95rem",
            lineHeight: "1.6",
            textAlign: "center",
            color: "#333333",
            margin: "0"
          }}>
            Nacieron en la cocina real de Valentina — no en Pinterest ni en un blog de copiar y pegar. Cada plato fue diseñado para <span style={{ fontWeight: "700" }}>calmar y nutrir</span>…y devolver <span style={{ fontWeight: "700" }}>placer</span> a quienes ya se habían rendido.
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
          }}>📦 Lo que recibirás:</h2>
          <p style={{ 
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "0.95rem", 
            marginBottom: "10px",
            lineHeight: "1.8"
          }}>Acceso a <span style={{ color: "#B34431", fontWeight: "bold" }}>500 recetas exclusivas</span> creadas y probadas por la chef Valentina Morales, organizadas para nutrir, reconfortar y deleitar tu día a día.</p>
          
          <ul style={{
            listStyle: "none",
            padding: "0 0 0 4px",
            margin: "0",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "0.95rem",
            lineHeight: "1.8"
          }}>
            <li>🍽️ <span style={{ color: "#B34431", fontWeight: "bold" }}>100 desayunos y snacks</span> — para empezar bien el día, sin picos de azúcar</li>
            <li>🥦 <span style={{ color: "#B34431", fontWeight: "bold" }}>300 propuestas de almuerzos y cenas</span> — sencillos, nutritivos y equilibrados, para cada día</li>
            <li>🍫 <span style={{ color: "#B34431", fontWeight: "bold" }}>100 postres gourmet</span> — sin azúcar refinada, pero llenos de placer</li>
            <li>🧭 <span style={{ color: "#B34431", fontWeight: "bold" }}>Recetas organizadas según tu objetivo</span>: digestión, saciedad, inflamación, energía</li>
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
          }}>🎁 Bonos exclusivos incluidos hoy:</h2>
          
          <ul style={{
            listStyle: "none",
            padding: "0",
            margin: "0",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
          }}>
            <li style={{ marginBottom: "12px" }}>
              <p style={{ fontSize: "0.95rem", fontWeight: "bold", margin: "0 0 4px 0", lineHeight: "1.8" }}>🎁 Bono 1: Guía inteligente de sustituciones</p>
              <p style={{ fontSize: "0.95rem", marginLeft: "1rem", margin: "0", lineHeight: "1.8" }}>Sustituye el azúcar, la harina o la leche… sin renunciar al sabor.</p>
            </li>
            <li style={{ marginBottom: "12px" }}>
              <p style={{ fontSize: "0.95rem", fontWeight: "bold", margin: "0 0 4px 0", lineHeight: "1.8" }}>🎁 Bono 2: Tabla de saciedad natural</p>
              <p style={{ fontSize: "0.95rem", marginLeft: "1rem", margin: "0", lineHeight: "1.8" }}>Crea platos que sacien sin excesos.</p>
            </li>
            <li style={{ marginBottom: "12px" }}>
              <p style={{ fontSize: "0.95rem", fontWeight: "bold", margin: "0 0 4px 0", lineHeight: "1.8" }}>🎁 Bono 3: Protocolo para el intestino y el azúcar en sangre</p>
              <p style={{ fontSize: "0.95rem", marginLeft: "1rem", margin: "0", lineHeight: "1.8" }}>Mejora tu digestión y tu energía diaria.</p>
            </li>
            <li style={{ marginBottom: "0" }}>
              <p style={{ fontSize: "0.95rem", fontWeight: "bold", margin: "0 0 4px 0", lineHeight: "1.8" }}> Bono 4: Lista de compras inteligente</p>
              <p style={{ fontSize: "0.95rem", marginLeft: "1rem", margin: "0", lineHeight: "1.8" }}>Ahorra tiempo con productos sencillos, probados y aprobados.</p>
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
            No es una dieta. No es una promesa vacía.
          </p>
          <p style={{ 
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "0.95rem",
            lineHeight: "1.8",
            color: "#333333",
            marginBottom: "12px",
            fontWeight: "normal"
          }}>
            Es un atajo hacia lo que has querido durante años: <span style={{ color: "#B34431", fontWeight: "600" }}>disfrutar de la comida con placer, sin dolor</span>
          </p>
          <p style={{ 
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "0.95rem",
            lineHeight: "1.8",
            color: "#333333",
            marginBottom: "0",
            fontWeight: "normal"
          }}>
            Y hoy, cuesta menos que una comida sin sabor en un restaurante.
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
            Con todo mi corazón — para que al fin disfrutes de la comida con libertad y placer.
          </p>
          <p style={{ 
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "1.05rem", 
            fontStyle: "italic", 
            fontWeight: "500", 
            color: "#B34431"
          }}>
            Chef Valentina Morales
          </p>
        </div>
      </div>
    </div>
  );
}
