/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // 确保包含 Vue 文件、JS 文件、TS 文件等的路径
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
