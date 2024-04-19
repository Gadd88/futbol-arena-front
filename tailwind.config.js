// import flowbite from 'flowbite-react'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/**/*.js",
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
        "primary-100":"#7FFF00",
        "primary-200":"#aaff70",
        "primary-300":"#266100",
        "accent-100":"#00FF7F",
        "accent-200":"#00971f",
        "text-100":"#000000",
        "text-200":"#2c2c2c",
        "bg-100":"#DFFF00",
        "bg-200":"#d4f500",
        "bg-300":"#bde400",
            
      }
    },
    
  },
  plugins: [
    // flowbite,
  ],
}