module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          base: 'var(--color-purple-base)',
          light: 'var(--color-purple-light)'
        },
        red: {
          base: 'var(--color-red-base)',
          light: 'var(--color-red-light)'
        }
      }
    },
  },
  plugins: [],
}
