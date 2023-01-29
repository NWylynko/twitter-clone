const { typewindTransforms } = require('typewind/transform');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: [
      "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    transform: typewindTransforms,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}