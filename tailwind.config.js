/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
    },
    extend: {
      colors: {
        'color_black-section': '#010606',
        'color_black-section2': '#0f1523',
        // 'primary': '#0683c9',
        'primary': '#32b4ff',
      },
    },
    plugins: [],
  }
}
