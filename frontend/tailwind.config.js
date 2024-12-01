/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#9FF01A',
        'secondary': '#111111',
      },
      backgroundImage: {
        'custom-gradient': 'radial-gradient(100% 100% 50% 0, rgba(0,122,255,0.7) 0%, transparent 100%), #000',
      },
    },
  },
  plugins: [],
}
