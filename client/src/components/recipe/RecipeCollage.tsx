import React from 'react';
import { RecipeImages, TestimonialImages } from '@/assets/imageExports';

interface RecipeCollageProps {
  variant?: 'grid' | 'book' | 'collage' | 'testimonial';
}

/**
 * Componente para exibir a colagem de imagens de receitas
 * Apresenta diferentes receitas ou o livro de receitas com base na variante escolhida
 */
export const RecipeCollage: React.FC<RecipeCollageProps> = ({ variant = 'grid' }) => {
  let image;
  let altText;
  
  switch(variant) {
    case 'grid':
      image = RecipeImages.recipes;
      altText = "Collection de recettes sans sucre, sans gluten et sans lactose";
      break;
    case 'book':
      image = RecipeImages.book;
      altText = "Livre de recettes Chef Savannah Cole";
      break;
    case 'collage':
      image = RecipeImages.collage;
      altText = "Collection de recettes Chef Savannah Cole";
      break;
    case 'testimonial':
      image = TestimonialImages.testimonial2;
      altText = "Témoignage client";
      break;
    default:
      image = RecipeImages.recipes;
      altText = "Collection de recettes sans sucre, sans gluten et sans lactose";
  }

  return null;
};