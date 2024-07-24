/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   "./screens/**/*.{js,ts,jsx,tsx",
  //   "./app/**/*.js.ts.jsx.tsx",
  //   "./components/**/*.{js,ts,jsx,tsx}",
  // ],
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  // presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
