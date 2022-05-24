module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#05354b",
          secondary: "#e1a94a",
          accent: "#094560",
          neutral: "#c08f3b",
          "base-100": "#ffffff",
        },
      }
    ],
  },
  plugins: [require("daisyui")],
}
