/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        greatVibes: "GreatVibes",
      },
      keyframes: {
        // interaktive animation

        // efek top left
        spinTopLeft01: {
          "0%, 100%": { transform: "rotate(9deg)" },
          "50%": { transform: "rotate(0deg)" },
        },
        spinTopLeft02: {
          "0%, 100%": { transform: "rotate(3deg)" },
          "50%": { transform: "rotate(0deg)" },
        },
        spinTopLeft03: {
          "0%, 100%": { transform: "rotate(9deg)" },
          "50%": { transform: "rotate(0deg)" },
        },

        // efek top right
        animationFirstLoadPage: {
          "0%": {
            opacity: 0,
            width: "0px",
            height: "0px",
          },
          "100%": {
            opacity: 1,
            width: "100%",
            height: "100%",
          },
        },
        animationFirstLoadingTopRight: {
          "0%": {
            opacity: 0,
            transform: "translate(0, 0) rotate(0deg)",
            width: "0px",
            height: "0px",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0, 0) rotate(0deg)",
            width: "9rem",
            height: "9rem",
          },
        },
        spinTopRight01: {
          "0%, 100%": { transform: "rotate(9deg)" },
          "50%": { transform: "rotate(0deg)" },
        },
        spinTopRight02: {
          "0%, 100%": { transform: "rotate(3deg)" },
          "50%": { transform: "rotate(0deg)" },
        },
        spinTopRight03: {
          "0%, 100%": { transform: "rotate(-9deg)" },
          "50%": { transform: "rotate(0deg)" },
        },

        // efek daun bottom left
        spinBottomLeft01: {
          "0%, 100%": { transform: "rotate(9deg)" },
          "50%": { transform: "rotate(0deg)" },
        },
        spinBottomLeft02: {
          "0%, 100%": { transform: "rotate(-9deg)" },
          "50%": { transform: "rotate(0deg)" },
        },

        // efek daun bottom right
        spinBottomRight02: {
          "0%, 100%": { transform: "rotate(9deg)" },
          "50%": { transform: "rotate(0deg)" },
        },
        spinBottomRight03: {
          "0%, 100%": { transform: "rotate(3deg)" },
          "50%": { transform: "rotate(0deg)" },
        },
        spinBottomRight04: {
          "0%, 100%": { transform: "rotate(-9deg)" },
          "50%": { transform: "rotate(0deg)" },
        },
      },
      // to animation
      animation: {
        // interaktive animation
        animationFirstLoadPage: "animationFirstLoadPage 1s ease-in",

        // efek daun top left
        spinTopLeft01: "spinTopLeft01 3s ease-in-out infinite",
        spinTopLeft02: "spinTopLeft02 3s ease-in-out infinite",
        spinTopLeft03: "spinTopLeft03 3s ease-in-out infinite",

        // efek daun top right
        animationFirstLoadingTopRight:
          "animationFirstLoadingTopRight 1s ease-in",
        spinTopRight01: "spinTopRight01 3s ease-in-out infinite",
        spinTopRight02: "spinTopRight02 3s ease-in-out infinite",
        spinTopRight03: "spinTopRight03 3s ease-in-out infinite",

        // efek daun bottom left
        spinBottomLeft01: "spinBottomLeft01 3s ease-in-out infinite",
        spinBottomLeft02: "spinBottomLeft02 3s ease-in-out infinite",

        // efek daun bottom right
        spinBottomRight02: "spinBottomRight02 3s ease-in-out infinite",
        spinBottomRight03: "spinBottomRight03 3s ease-in-out infinite",
        spinBottomRight04: "spinBottomRight04 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
