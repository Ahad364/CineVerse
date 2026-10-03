module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#060608",
        surface: "#0e0e12",
        "surface-2": "#16161c",
        "surface-3": "#1e1e26",
        brand: { primary: "#E50914", hover: "#ff0f1c", accent: "#00D4FF", gold: "#FFD700" }
      }
    }
  },
  plugins: []
};