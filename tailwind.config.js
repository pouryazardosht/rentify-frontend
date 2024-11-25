/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        //heading
        h1: [
          "2.75rem",
          {
            fontWeight: 700,
          },
        ],
        h2: [
          "2.5rem",
          {
            fontWeight: 700,
          },
        ],
        h3: [
          "2rem",
          {
            fontWeight: 700,
          },
        ],
        h4: [
          "1.5rem",
          {
            fontWeight: 700,
          },
        ],
        h5: [
          "1.25rem",
          {
            fontWeight: 700,
          },
        ],
        h6: [
          "1.125rem",
          {
            fontWeight: 700,
          },
        ],
      },
      colors: {
        primary: "#0D6EFD",
        black: "#0C0C0C",
        gray: "#F6F6F6",
        // tints
        tint1: "#3D8BFD",
        tint2: "#6EA8FE",
        tint3: "#9EC5FE",
        tint4: "#B6D4FE",
        tint5: "#CFE2FF",
        tint6: "#E7F1FF",
        // shades
        shade1: "#0A58CA",
        shade2: "#084298",
        shade3: "#052C65",
        shade4: "#04214C",
        shade5: "#031633",
        shade6: "#010B19",
        shade7: "#000000",
        // grays
        g1: "#353739",
        g2: "#45484B",
        g3: "#595C61",
        g4: "#73767C",
        g5: "#7E8288",
        g6: "#989BA0",
        g7: "#A9ABAF",
        g8: "#C4C4C4",
        g9: "#D7D8DA",
        g10: "#F2F3F3",
        g11: "#FAFAFA",
        // states
        error: "#C30000",
        error1: "#ED2E2E",
        success: "#00966D",
        success1: "#00BA88",
        warning: "#A9791C",
        warning1: "#F4B740",
      },
      fontFamily: {
        vazir: ["vazirmatn", "sans-serif"],
      },
      backgroundImage: {
        "banner-pattern": "url('/src/assets/images/banner-img.png')",
      },
    },
  },
  plugins: [],
};
