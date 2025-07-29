import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { FacebookPixel } from "../../lib/fbPixel";

// Componente de botão pulsante coral
const CoralPulseButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => {
  return (
    <div className="relative inline-block w-full mb-3 sm:mb-4">
      <div className="absolute inset-0 rounded-full opacity-30" 
        style={{
          background: "linear-gradient(90deg, #b80a0a 0%, #c51a38 100%)",
          animation: "ping 3s cubic-bezier(0.66, 0, 0, 1) infinite"
        }}
      ></div>
      <button 
        onClick={onClick}
        className="relative w-full py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg font-normal text-white"
        style={{ 
          background: "linear-gradient(90deg, #b80a0a 0%, #c51a38 100%)",
          boxShadow: "0 0 10px rgba(229, 136, 95, 0.3)"
        }}
      >
        {children}
      </button>
    </div>
  );
};

interface ProfileResultProps {
  onViewSuggestions: () => void;
}

export default function ProfileResult({ onViewSuggestions }: ProfileResultProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="profile-result max-w-md mx-auto my-5 sm:my-8 md:my-12 px-3 sm:px-6"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-primary">Your gourmet profile:</h2>
      <h3 className="text-2xl sm:text-3xl font-normal text-[#333333] mb-6 sm:mb-8 md:mb-10">The Curious Epicurean</h3>

      <div className="space-y-5 sm:space-y-8 md:space-y-10 text-[#333333] text-left">
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            You're the type of person who likes to explore new flavors, try out unexpected recipes and indulge without guilt.
        </p>
        
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Your palate seeks a balance between pleasure and well-being - without sacrificing indulgence.
        </p>
        
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            What Chef Savannah has prepared for you is exactly that: a universe of recipes that combine textures, aromas and intelligent nutrition.
        </p>
      </div>

      <div className="mt-8 sm:mt-10 md:mt-12">
        <CoralPulseButton onClick={onViewSuggestions}>
            See the Chef's suggestions 🍽️
        </CoralPulseButton>
      </div>
    </motion.div>
  );
}
