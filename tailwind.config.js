/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#fc2947',
        'alt-color': '#fc2949c2',
        'text-color': '#747373',
        'paragraph-color' : '#dde6ed',
        'textcolor': '#374151',
      },

    },
  },
  plugins: [],
}