module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "system-ui"]
    }
  },
  variants: {
    animation: ["hover", "focus"]
  },
  plugins: []
};
