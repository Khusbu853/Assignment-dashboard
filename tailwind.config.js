/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, hsla(60, 30%, 93%, 1) 0%, hsla(176, 18%, 84%, 1) 100%, hsla(210, 56%, 94%, 1) 100%)',
      },
    },
  },
  plugins: [],
}


