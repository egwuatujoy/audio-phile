/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        lightgray: "#191919",
        orange: "#D87D4A",
        lightorange: "#fbaf85",
      },
      backgroundImage: {
        "home-img": "url('/images/Bitmap(1).png')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
      letterSpacing: {
        overWide: "10px",
      },
    },
  },
  plugins: [],
};
