/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: {
            opacity:"0",
            transform:"translateX(-20px)",
          },
          to: {
            opacity:"1",
            transform:"translateX(0)"
          }
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in 300ms",
        // pulse: "pulse 300ms",
      },
      fontFamily: {
        RedHat: ["Red Hat Display", "serif"],
       },
      colors: {
        primary: "#1C212C"
      }
    },
  },
  plugins: [],
}

