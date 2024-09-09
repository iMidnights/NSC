import type { Config } from "tailwindcss";
import forms from '@tailwindcss/forms'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#8B0015",
          800: "#971a2c",
          700: "#a23344",
          600: "#ae4d5b",
          500: "#b96673",
          400: "#c5808a",
          300: "#d199a1",
          200: "#dcb3b9",
          100: "#e8ccd0",
          50: "#f3e6e8",
        },
      },
      fontFamily: {
        "domine": ['Domine', 'serif'],
        "kanit": ['Kanit', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [forms],
};
export default config;
