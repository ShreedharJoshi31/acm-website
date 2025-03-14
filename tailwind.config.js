/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#00A9FF',
        secondary: '#89CFF3',
        tertiary: '#A0E9FF',
        quaternary: '#CDF5FD',
      },
      boxShadow: {
        "custom-inset":
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Add the font to Tailwind
      },
    },
  },
  plugins: [],
};
