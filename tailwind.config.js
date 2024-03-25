/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'arena-green': {
          '50': '#eefde8',
          '100': '#d6fbcc',
          '200': '#b2f6a0',
          '300': '#7ced61',
          '400': '#58e13a',
          '500': '#37c71b',
          '600': '#259f11',
          '700': '#207912',
          '800': '#1d6014',
          '900': '#1c5116',
          '950': '#092d06',
          },
      }
    },
    
  },
  plugins: [],
}