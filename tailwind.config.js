/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: ["12px", "14.4px"],
      md: ["14px", "21x"],
      base: ["16px", "24px"],
      lg: ["18px", "18px"],
      "2xl": ["24px", "28.8px"],
    },

    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
    plugins: ["prettier-plugin-tailwindcss"],
  },
};
