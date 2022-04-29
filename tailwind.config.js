module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./node_modules/flowbite/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
