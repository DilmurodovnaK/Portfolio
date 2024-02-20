import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
   theme: {
    screens: {
      '2xl': {'max': '1420px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }
  'tg': {'max': '1080px'},
      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
 'ig': {'max': '940px'},
      'md': {'max': '785px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '669px'},
      // => @media (max-width: 639px) { ... }
       'ss': {'max': '615px'},
      'ms' : {'max': '430px'},
      'mm': {'max': '409px'},
      // => @media (max-width: 639px) { ... }
    },
   
    extend: {
      
      fontFamily: {
        domine: ['Domine', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      "hello" :"url('./src/components/header/head.jpg)",


      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
