import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],theme: {
    extend: {
      colors: {
        primary: "#e61e4d"
      }
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#e61e4d",
          ".btn-primary": {
            "color": "whitesmoke"
          }
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
