module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "550px" },
      md: { min: "551px", max: "1050px" },
    },
    extend: {
      colors: {
        gray_600: "#6b7280",
        black_900: "#000000",
        bluegray_300: "#9ca3af",
        pink_700: "#be185d",
        gray_200: "#e5e7eb",
        white_A700: "#ffffff",
      },
      borderRadius: { radius4: "4px", radius6: "6px" },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
