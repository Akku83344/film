/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#393646",
        secondary: "#F4EEE0",
        bodyBg: "#6D5D6E",
      },
      animation: {
        blink: "myAnim 2s ease 0s infinite normal forwards",
      },
      keyframes: {
        myAnim: {
          "0%,50%, 100%": { opacity: 1 },
          "25%, 75%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
