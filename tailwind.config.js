 /** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
   theme: {
     extend: {
        colors: {
          'custom-pink': '#cb6db8',
          'custom-bar': '#C4B4DA',
          'custom-bar-opa': '#bb6bab3d', 
          'hero-pink': '#bb6bab',
          'bleuPastel': '#D8EFFC',
          'rose-baby': '#F2CFE7'
        },

        fontFamily: {
          sans: ['Arial', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        },
     },
   },
   plugins: [],
 }

