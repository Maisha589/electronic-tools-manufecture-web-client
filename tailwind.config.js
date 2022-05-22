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
          primary: "#104210",
          secondary: "#D5CE58",
          accent: "#4A7212",
          neutral: "#719F1E",
          "base-100": "#ffffff",
        },
      }
    ],
  },
  plugins: [require("daisyui")],
}
