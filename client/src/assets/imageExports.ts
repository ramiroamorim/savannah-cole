/**
 * Arquivo centralizador de imagens
 * 
 * Este arquivo exporta todas as imagens utilizadas no projeto de forma organizada.
 * Sempre importe imagens deste arquivo em vez de importar diretamente dos arquivos.
 */

// Chef Images
import chefProfile from './images/chef/imagem-finaliza.png';
import chefSavannah from './images/chef/chef-savannah.png';


// Recipes Images
import book from './images/Book/book-expert.png';
import expertFechamento2 from './images/Book/li-book.png';
import recipesGrid from './images/recipes/recipes-grid.png';
import recipesGridCollage from './images/recipes/recipe-grid-us.png';
import recipesMain from './images/recipes/recipes-main.png';

// Testimonials Images
import testimonial1 from './images/testemonials-us/prova 2.jpeg';
import testimonial2 from './images/testemonials-us/prova-10.jpg';
import testimonial3 from './images/testemonials-us/prova-01.jpg';
import testimonial4 from './images/testemonials-us/prova 4.jpeg';
import testimonialBread from './images/testemonials-us/prova 3 .jpeg';
import testimonialBrownie from './images/testemonials-us/prova-2-bolo.jpeg';

// Thank You, Page Images
import thankYouPage from './images/thank-you/thank-you-page.png';
import audioPreview from './images/thank-you/audio-preview.png';

// Export por categoria para organização
export const ChefImages = {
  profile: chefProfile,
  savannah: chefSavannah
};

export const RecipeImages = {
  grid: recipesGrid,
  gridCollage: recipesGridCollage,
  main: recipesMain,
  expertFechamento2: expertFechamento2,
};

export const TestimonialImages = {
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  bread: testimonialBread,
  brownie: testimonialBrownie
};

export const ThankYouImages = {
  page: thankYouPage,
  audioPreview: audioPreview
};

// Exportação plana para compatibilidade com código existente
export {
  // Chef Images
  chefProfile,
  chefSavannah,
  
  // Recipe Images
  recipesGrid,
  recipesGridCollage,
  recipesMain,
  expertFechamento2,
  
  // Testimonial Images
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonialBread,
  testimonialBrownie,
  
  // Thank You Page Images
  thankYouPage,
  audioPreview
};