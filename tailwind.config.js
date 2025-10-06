/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',  // for full HD monitors and above
        '4xl': '2560px',  // for 2K / 4K monitors
      },
    },
  },
  plugins: [],
};
