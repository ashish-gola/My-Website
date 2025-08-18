module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'text-white',
    'text-gray-200',
    'text-gray-300',
    'text-gray-400',
    'bg-gradient-to-r',
    'from-sky-500',
    'to-blue-500',
    'sm:bg-gradient-to-r',
    'sm:from-sky-500',
    'sm:to-blue-500',
  ],
}
   