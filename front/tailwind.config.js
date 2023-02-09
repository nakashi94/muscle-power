/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "gray-op": "rgba(17, 24, 39, 0.9)",
      },
    },
  },
  plugins: [],
}
