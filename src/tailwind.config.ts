/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        'custom900': '900px',
      },
    },
  },
}
// Example Tailwind plugin or in your CSS (optional)
.input-style {
  @apply w-full px-4 py-2 border border-[#9b111e]/30 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#9b111e]/50 focus:border-transparent transition;
}

