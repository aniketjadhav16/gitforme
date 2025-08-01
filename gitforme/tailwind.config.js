/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         fontFamily: {
        'space-mono': ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}