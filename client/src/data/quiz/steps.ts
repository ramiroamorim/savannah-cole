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
    title: "You've been lied to.",
    textBlocks: [
      {
        content: "You can eat a <strong>fudgy brownie</strong>, a <strong>soft brioche</strong>, or a <strong>chocolate-hazelnut tart</strong> — <em>sugar-free, gluten-free, lactose-free.</em>"
      },
      {
        content: "And go for seconds. Without guilt."
      },
      {
        content: "🎁 In 1 minute, discover your <strong>gourmet profile</strong> and access the <em>private collection</em> of 500 signature recipes from Chef Savannah."
      }
    ],
    image: "https://cdn.xquiz.co/images/94f2084a-557c-43be-abcc-2ba23141cb46",
    imageAlt: "Sugar-free, gluten-free, lactose-free desserts",
    buttonText: "Discover my gourmet profile",
    footerText: "Over <strong>30,000 women</strong> have already discovered theirs<br>This test takes only 60 seconds"
  },
  
  // Step 1
  {
    name: "discourage",
    title: "<span class='text-[#333333]'>When you try to </span><span class='text-primary font-semibold'>eat healthier</span><span class='text-[#333333]'>... what </span><span class='text-primary font-semibold'>discourages</span><span class='text-[#333333]'> you the most?</span>",
    options: [
      {
        value: "fades",
        label: "The dishes are often bland or dry"
      },
      {
        value: "faim",
        label: "I'm still hungry after eating"
      },
      {
        value: "idees",
        label: "I don't know what to cook on a daily basis"
      },
      {
        value: "abandon",
        label: "I give up after a few days"
      }
    ]
  },
  
  // Step 2
  {
    name: "dessert",
    title: "<span class='text-primary font-semibold'>Even without sugar, gluten, or lactose... </span><span class='text-[#333333]'>which of these treats tempts you the most?</span>",
    image: RecipeImages.grid,
    imageAlt: "Collection of sugar-free, gluten-free, lactose-free desserts",
    options: [
      {
        value: "brownie",
        label: "🍫 Fudgy brownie still warm"
      },
      {
        value: "brioche",
        label: "🥐 Soft cinnamon brioche"
      },
      {
        value: "tartelette",
        label: "🥧 Chocolate-hazelnut tart"
      },
      {
        value: "baguette",
        label: "🥖 Crispy and warm baguette"
      }
    ]
  },
  
  // Step 3
  {
    name: "tried_recipes",
    title: "<span class='text-[#333333]'>Have you ever tried following </span><span class='text-primary font-semibold'>\"healthy\" recipes </span><span class='text-[#333333]'>found on the internet?</span><br><span class='text-[#333333]'>The ones that promise everything... but end up </span><span class='text-primary font-semibold'>too complicated, too bland </span><span class='text-[#333333]'>or </span><span class='text-primary font-semibold'>complete failures</span><span class='text-[#333333]'>?</span>",
    options: [
      {
        value: "disappointed",
        label: "😔 Yes, I've tried... and I was disappointed"
      },
      {
        value: "sometimes",
        label: "😐 I've tried, sometimes it works"
      },
      {
        value: "no_trust",
        label: "🧐 No, I don't trust online recipes"
      }
    ]
  },
  
  // Step 4
  {
    name: "chef_profile",
    image: ChefImages.savannah,
    imageAlt: "Chef Savannah Cole",
    title: "Meet Chef Savannah Cole",
    description: "Her story, her mission, her recipes.",
    textBlocks: [
      {
        content: "Born in Georgia, USA, Savannah Cole grew up surrounded by warm bread, fresh herbs, and family recipes passed down by her grandmother."
      },
      {
        content: "She refined her expertise working in local restaurants committed to natural cuisine that respects the body."
      },
      {
        content: "But it was after discovering her own intolerances that she decided to create a new approach:"
      },
      {
        content: "Simple, delicious recipes, sugar-free, gluten-free, lactose-free — and full of pleasure.",
        highlight: true
      },
      {
        content: "Today, she shares over 500 recipes designed to transform the daily lives of thousands of women."
      }
    ],
    buttonText: "See how her recipes can help me"
  },
  
  // Step 5
  {
    name: "improve",
    title: "<span class='text-primary font-semibold'>What would you like to improve </span><span class='text-[#333333]'>as a priority today?</span>",
    options: [
      {
        value: "digestion",
        label: "🥗 Reduce bloating and improve my digestion"
      },
      {
        value: "sugar",
        label: "🍬 Stabilize my blood sugar and reduce sugar cravings"
      },
      {
        value: "weight",
        label: "⚖️ Lose weight without frustration or extreme dieting"
      },
      {
        value: "energy",
        label: "💪 Regain my energy and overcome chronic fatigue"
      },
      {
        value: "all",
        label: "🌱 All of the above (and finally feel good in my body)"
      }
    ]
  },
  
  // Step 6
  {
    name: "testimonials",
    title: "<span class='text-primary font-semibold'>Hundreds of women </span><span class='text-[#333333]'>have already tested these recipes and seen their bodies transform.</span>",
    description: "<span class='text-primary'>Swipe ➤ to see what they say.</span>",
    isTestimonialStep: true,
    buttonText: "🔍 DISCOVER MY PROFILE"
  }
];