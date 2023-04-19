/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkslategray: "#413d3d",
        white: "#fff",
        mediumseagreen: "rgba(67, 169, 83, 0.74)",
      },
      fontFamily: { roboto: "Roboto", karla: "Karla", inter: "Inter" },
    },
    fontSize: { xl: "20px", sm: "14px", "19xl": "38px" },
  },
  corePlugins: { preflight: false },
};
