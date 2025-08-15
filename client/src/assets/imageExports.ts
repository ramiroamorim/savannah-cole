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
import novissima from './images/Imagenova/novissima.png'
import imagenova from './images/Imagenova/img-esp-final1.png';
import recipesGrid from './images/recipes/recipes-grid.png';
import recipesGridCollage from './images/recipes/banner-final-esp.png';
import recipesMain from './images/recipes/recipes-main.png';

// Testimonials Images - CORRIGIDO SEM ESPAÇOS
import testimonial1 from './images/testemonail-carrousell/testimonial1.jpg';
import testimonial2 from './images/testemonail-carrousell/testimonial2.jpg';
import testimonial3 from './images/testemonail-carrousell/testimonial3.jpg';
import testimonial4 from './images/testemonail-carrousell/testimonial4.jpg';
import testimonial5 from './images/testemonail-carrousell/testimoanial5.jpg';
import testimonialBread from './images/testemonail-carrousell/testimonial2.jpg';
import testimonialBrownie from './images/testemonail-carrousell/testimonial4.jpg';

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
  imagenova: imagenova
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
  imagenova,
  novissima,

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