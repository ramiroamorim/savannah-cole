/**
 * Dados dos testemunhos que aparecem no carrossel
 * Cada testemunho contém uma mensagem e uma imagem associada
 */

import { TestimonialType } from "@/types/quiz";

// Importação das imagens (usando o alias do vite para a pasta assets)
import testimonialImage1 from '@/assets/images/testimonials/testimonial1.png';
import testimonialImage2 from '@/assets/images/testimonials/testimonial2.png';
import testimonialImage3 from '@/assets/images/testimonials/testimonial3.png';
import testimonialImage4 from '@/assets/images/testimonials/testimonial4.png';

// Array com as imagens importadas para uso fácil
export const testimonialImages = [
  testimonialImage1,
  testimonialImage2,
  testimonialImage3,
  testimonialImage4
];

export const testimonials: TestimonialType[] = [
  {
    message: "Before I used to wake up bloated, tired, lost.<br>In 21 days with the Express Plan I lost 3.1kg, my clothes fit better...<br>But most importantly: I feel at peace at the table. This is new.",
    time: "",
    image: testimonialImages[0],
    imageAlt: "Témoignage avec photos avant/après"
  },
  {
    message: "I've never had so much pleasure cooking without sugar 😍",
    time: "",
    image: testimonialImages[1],
    imageAlt: "Témoignage cuisine sans sucre"
  },
  {
    message: "I'm shocked...<br>Not a single craving this week.<br>I ate normally, cooked quickly, and yet I feel LIGHTER than ever.<br>This is the first time I don't feel guilty at the table.",
    time: "",
    image: testimonialImages[2],
    imageAlt: "Témoignage Le Plan Express"
  },
  {
    message: "I can finally eat sweets without fearing for my blood sugar. I'm diabetic and it's always complicated to find desserts that are good and sugar-free. I made your brownie and it was perfect. Just sweet enough, perfect texture... Honestly, I didn't think it was possible. Thank you for these recipes!!! 🙏🙏🙏",
    time: "",
    image: testimonialImages[3],
    imageAlt: "Témoignage brownie sans sucre pour diabétique"
  },
  {
    message: "Amelie, hello..... I lost 4 kilos without even realizing it. I got your book to eat healthier, and in the end, it also helped me lose weight. The recipes are filling and balanced, so I stopped snacking on anything. Now, I eat well, without frustration, and I feel better 🙏❤️❤️",
    time: "",
    image: testimonialImages[0],
    imageAlt: "Témoignage perte de poids"
  },
  {
    message: "My son asked me to make the Express Plan cookies again. Before he hated my \"sugar-free\" recipes. Now he says I cook like a chef... ❤️ thank you",
    time: "14:55",
    image: testimonialImages[1],
    imageAlt: "Témoignage cookies sans sucre"
  },
  {
    message: "Your recipes are wonderful<br>I digest better, I feel lighter... and I finally eat with pleasure.",
    time: "",
    image: testimonialImages[2],
    imageAlt: "Témoignage digestion améliorée"
  },
  {
    message: "loved them!<br>Thanks to your recipes, I finally found balance. I eat with pleasure, digest well... and lost 4 kg without thinking about it.",
    time: "",
    image: testimonialImages[3],
    imageAlt: "Témoignage équilibre alimentaire"
  },
  {
    message: "Chef, I don't know how to thank you. I've always had digestive problems and thought it was normal to be bloated all the time. Since I tried some recipes from your book, my digestion is much better. I feel lighter, and plus, everything is really good. I never would have believed that a gluten-free and lactose-free diet could be so delicious. Thank you.",
    time: "",
    image: testimonialImages[0],
    imageAlt: "Témoignage problèmes digestifs résolus"
  },
  {
    message: "Hi chef! This is Béatrice speaking.... My son has celiac disease and finally, we all eat the same thing. Before, I made separate dishes for him, but often, he didn't like them much. With your recipes, everyone eats the same and loves it. The sweet potato bread has become his favorite. Thank you for these ideas, it changes everything in daily life.",
    time: "2:42 PM",
    image: testimonialImages[1],
    imageAlt: "Témoignage coeliaque"
  },
  {
    message: "Amelie, good evening!! Honestly, I'm so happy. Since I discovered my lactose intolerance, I had stopped making desserts because nothing really pleased me. But yesterday, I made your carrot cake and it was perfect. Moist, flavorful, and the sugar-free frosting is so good. It's nice to be able to treat yourself without feeling guilty 🙏❤️",
    time: "7:46 PM",
    image: testimonialImages[2],
    imageAlt: "Témoignage intolérance au lactose"
  },
  {
    message: "I thought I had to say goodbye to bread, but thanks to your recipes, I'm eating it again!! I've always loved bread for breakfast, but since I stopped gluten, all alternatives were dry and bland. I tried your oat bread and was amazed by the texture and taste. It's soft and flavorful, even my family loves it. Thank you for this book!!!! 😋❤️",
    time: "5:33 AM",
    image: testimonialImages[3],
    imageAlt: "Témoignage pain sans gluten"
  }
];