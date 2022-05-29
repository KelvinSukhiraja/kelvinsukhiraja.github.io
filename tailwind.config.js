module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#001220",
        theme: "#FF0066",
        nav: "#404053",
        secondary: "#9191A4",
        badge: "#3F3F51",
        "input-border": "#565666",
        input: "#2A2A35",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
        montserrat: ["'Montserrat'", "sans-serif"],
      },
      backgroundImage: {
        "hero-blob": "url('./assets/hero-blob.svg')",
        "waves-top": "url('./assets/waves-top.svg')",
        "waves-bot": "url('./assets/waves-bot-big.svg')",
      },
    },
  },
  plugins: [],
};