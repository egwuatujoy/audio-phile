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
        light: "#979797",
        lightGray: "#F1F1F1",
        background: "#fafafa",
      },
      backgroundImage: {
        "home-img": "url('/images/Bitmap(1).png')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
      letterSpacing: {
        overWide: "10px",
      },
      maxWidth: {
        main: "1190px",
        half: "50%",
        quartar: "45%",
        medium: "55%",
        large: "60%",
        small: "40%",
        imageone: "985px",
        imagetwo: "460px",
      },
    },
  },
  plugins: [],
};
