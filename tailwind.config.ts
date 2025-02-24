
import type { Config } from "tailwindcss";
import { myRose, myDarkBlue, myKhaki, myEggshell, myLightBlue } from './src/utils/colors';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '9rem',
        '11xl': '10rem',
        '12xl': '11rem',
        // '10xl': ['9rem', {lineHeight: '20px'}]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        rose: myRose[4],
        darkBlue: myDarkBlue[9],
        khaki: myKhaki[3],
        khaki_dark: myKhaki[6],
        eggshell: myEggshell[0],
        lightBlue: myLightBlue[4]
      },
    },
  },
  plugins: [],
} satisfies Config;
