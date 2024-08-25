import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {},
      colors: {
        Primary: "#758694",
        Secondary: "#405D72",
        Text: "#FFF8F3",
        BG: "#F7E7DC",
      },
    },
  },
  plugins: [],
};
export default config;
