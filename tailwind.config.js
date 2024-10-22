/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        button: {
          primary: "#007AFF",
          secondary: "#3A95DF",
          danger: "#FF3B30",
        },
      },
    },
  },
  plugins: [],
};
