/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E0C09",
        surface: "#17130F",
        raised: "#1F1A14",
        hairline: "#352D23",
        ivory: "#F5F1E8",
        sand: "#C9A574",
        "sand-dim": "#A6875F",
        clay: "#8B5E3C",
        muted: "#A89C8B",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.3em",
      },
      backgroundImage: {
        contour:
          "radial-gradient(circle at 20% 20%, rgba(201,165,116,0.06), transparent 40%), radial-gradient(circle at 80% 0%, rgba(139,94,60,0.08), transparent 45%)",
      },
    },
  },
  plugins: [],
};
