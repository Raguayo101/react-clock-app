/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#303030",
        grayish: "#D8D8D8",
        whitegray: "#979797",
      },
      fontSize: {
        xxl: ["200px", "200px"],
      },
      width: {
        128: "35rem",
      },
      margin: {
        '5px': '5px',
      }
    },
  },
  plugins: [],
};
