/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "FoundersGrotesk-Semibold": ["FoundersGrotesk-Semibold", "sans-serif"],
        "FoundersGroteskXCond-Bold": [
          "FoundersGroteskXCond-Bold",
          "sans-serif",
        ],
        "FoundersGroteskXCond-Lt": ["FoundersGroteskXCond-Lt", "sans-serif"],
        icomoon: ["icomoon", "sans-serif"],
        "NeueMontreal-Regular": ["NeueMontreal-Regular", "sans-serif"],
      },
      keyframes: {
        underlineAnimation2: {
          "0%": {
            transform: "scaleX(1)",
            transformOrigin: "bottom right",
          },
          "50%": {
            transform: "scaleX(0)",
            transformOrigin: "bottom right",
          },
          "51%": {
            transform: "scaleX(0)",
            transformOrigin: "bottom left",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
      },
      animation: {
        underlineAnimation2: "underlineAnimation2 0.5s linear 1 ",
      },
    },
  },
  plugins: [],
};
