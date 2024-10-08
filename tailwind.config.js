/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px',
        '3': '3px',
      },
      height: {
        '18': '68px',
      },
      spacing: {
        '85': '21.5rem',
        '88': '22.5rem'
      },
      fontFamily: {
        'Arial': ['Helvetica', 'sans-serif',]
      },
    },
  },
  plugins: [],
}

