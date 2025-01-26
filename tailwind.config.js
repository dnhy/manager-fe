/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // 确保包含 Vue 文件、JS 文件、TS 文件等的路径
  ],
  theme: {
    extend: {},
    colors: {
      black: "#000",
      white: "#fff",
      grey: "#eee",
      grey2: "#ccc",
      blue: "#7494ec",
    },
  },
  plugins: [],
};
