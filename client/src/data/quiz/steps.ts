 /**
 * Passos/etapas do quiz
 * Contém todas as perguntas e opções que o usuário verá durante o quiz
 */

import { QuizStepType } from "@/types/quiz";
import { RecipeImages, ChefImages } from '@/assets/imageExports';

export const quizSteps: QuizStepType[] = [
  // Step 0 - Landing Page
  {
    name: "landing",
    title: "Te han mentido.",
    textBlocks: [
      {
        content: "Aún puedes disfrutar de <strong>Un pudín de chocolate negro que se derrite en la boca</strong>, Un <strong>pastel de manzana que huele a infancia</strong>, Una <strong> crema cítrica con textura sedosa</strong> — <em>Todo sin gluten, sin azúcar, Sin lactosa</em>"
      },
      {
        content: "Y sí… repetir sin culpa."
      },
      {
        content: "🎁 En 1 minuto, descubre tu <strong>Perfil gourmet</strong> y aceda a la <em>colección privada</em> de 500 recetas icónicas de la Chef Valentina Morales"
      }
    ],
    image: "https://cdn.xquiz.co/images/94f2084a-557c-43be-abcc-2ba23141cb46",
    imageAlt: "Sugar-free, gluten-free, lactose-free desserts",
    buttonText: "Descubrir mi perfil gourmet",
    footerText: "Más de <strong>30,000 mujeres</strong> ya han descubierto el suyo <br>Este test toma solo 60 segundos."
  },
  
  // Step 1
  {
    name: "discourage",
    title: "<span class='text-[#333333]'>Cuando intentas </span><span class='text-primary font-semibold'>comer más sano…</span><span class='text-[#333333]'>...  ¿Qué </span><span class='text-primary font-semibold'>es lo que más</span><span class='text-[#333333]'> te desanima?</span>",
    options: [
      {
        value: "fades",
        label: "Todo sabe artificial o sin alma"
      },
      {
        value: "faim",
        label: "Sigo deseando algo dulce después de cada comida"
      },
      {
        value: "idees",
        label: "Me siento castigada cada vez que digo “no”"
      },
      {
        value: "abandon",
        label: "Lo intento, pero siempre termino cayendo"
      }
    ]
  },
  
  // Step 2
  {
    name: "dessert",
    title: "<span class='text-primary font-semibold'>Aunque no tengan azúcar, gluten ni lactosa… </span><span class='text-[#333333]'> ¿Cuál de estas delicias aún te hace cerrar los ojos solo al imaginarla?</span>",
    image: RecipeImages.grid,
    imageAlt: "Collection of sugar-free, gluten-free, lactose-free desserts",
    options: [
      {
        value: "brownie",
        label: "🍮 Pudín de chocolate caliente con centro fundido"
      },
      {
        value: "brioche",
        label: "🍎 Pastel de manzana con canela y aroma a hogar"
      },
      {
        value: "tartelette",
        label: "🍋 Tartaleta de limón con crema sedosa y base crujiente"
      },
      {
        value: "baguette",
        label: "🍫 Trufas de cacao con textura suave y corazón especiado"
      }
    ]
  },
  
  // Step 3
  {
    name: "tried_recipes",
    title: "<span class='text-[#333333]'>¿Alguna vez intentaste esas recetas </span><span class='text-primary font-semibold'>\"saludables\"  </span><span class='text-[#333333]'>de Internet</span><br><span class='text-[#333333]'>esas que prometen milagros pero </span><span class='text-primary font-semibold'>resultan demasiado complicadas</span><span class='text-[#333333]'> y </span><span class='text-primary font-semibold'>insípidas o un completo fracaso?</span><span class='text-[#333333]'>?</span>",
    options: [
      {
        value: "disappointed",
        label: "😔 Sí, lo intenté… y me rompieron el corazón (más de una vez)"
      },
      {
        value: "sometimes",
        label: "😐 Algunas funcionan… pero casi todas decepcionan"
      },
      {
        value: "no_trust",
        label: "🧐 No, no creo en las recetas de Internet"
      }
    ]
  },
  
  // Step 4
  {
    name: "chef_profile",
    image: ChefImages.savannah,
    imageAlt: "Chef Savannah Cole",
    title: "Conoce a la Chef Valentina Morales",
    description: "Su historia, su misión, sus recetas.",
    textBlocks: [
      {
        content: "Nacida en Barcelona y criada entre los aromas del Mediterráneo.\n" +
            "Formada en cocina funcional y gastronomía saludable."
      },
      {
        content: "A los 32 años, fue diagnosticada con intolerancia múltiple."
      },

      {
        content: "Durante años, perdió el placer de comer.\n" +
            "Hoy, ha creado un nuevo camino:"
      },
      {
        content: "Haciéndolo simple, delicioso y libre de azúcar, gluten y lactosa...",
        highlight: true
      },
      {
        content: "Hoy comparte más de 500 recetas que demuestran que puedes disfrutar de cada bocado sin culpa ni restricciones."
      }
    ],
    buttonText: "Descubre cómo sus recetas pueden ayudarme"
  },
  
  // Step 5
  {
    name: "improve",
    title: "<span class='text-primary font-semibold'>¿Qué te gustaría recuperar </span><span class='text-[#333333]'>primero?</span>",
    options: [
      {
        value: "digestion",
        label: "🍮 Disfrutar del postre sin sentir culpa ni hinchazón"
      },
      {
        value: "sugar",
        label: "🍬 Estabilizar mi azúcar en sangre y reducir los antojos de azúcar"
      },
      {
        value: "weight",
        label: "⚖️ Bajar de peso sin frustración ni dietas extremas"
      },
      {
        value: "energy",
        label: "💪  Sentirme ligera, satisfecha y bien en mi cuerpo"
      },
      {
        value: "all",
        label: "🫶 Todo eso. Solo quiero volver a disfrutar."
      }
    ]
  },
  
  // Step 6
  {
    name: "testimonials",
    title: "<span class='text-primary font-semibold'>Cientos de mujeres </span><span class='text-[#333333]'>ya han probado estas recetas y han visto transformar sus cuerpos.</span>",
    description: "<span class='text-primary'>Swipe ➤ to see what they say.</span>",
    isTestimonialStep: true,
    buttonText: "🔍 DESCUBRE MI PERFIL"
  }
];