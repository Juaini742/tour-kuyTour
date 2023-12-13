/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#059669",
        secondary: "#042F2E",
        warning: "#EAB308",
      },
    },
  },
  plugins: [],
};
