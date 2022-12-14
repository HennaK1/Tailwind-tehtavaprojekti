/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "bg-image1": "url('/dist/img/circle2.svg')",
        "bg-image2": "url('/dist/img/concert.jpg')",
      },
      colors: {
        darkbrown: "#3A2F33",
        lightbrown: "#9D8483",
        lightblue: "#ACCFD2",
        lightyellow: "#DED8AB",
        naturalwhite: "#EDEFEF",
        "ctm-lila": "#818cf8",
        "ctm-darklila": "#4338ca",
        "ctm-lightlila": "#a5b4fc",
        "ctm-bglila": "#e9d5ff",
      },
    },
  },
  plugins: [],
};
