/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'archivo': ['Archivo', 'sans-serif'],
        'kenia': ['Kenia', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

