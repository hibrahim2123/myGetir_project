/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        0.1: "0.063rem",
      },
      backgroundImage: (theme) => ({
        "mobile-app":
          "url(https://st2.depositphotos.com/2760050/6562/i/600/depositphotos_65626637-stock-photo-art-purple-metallized-paper-background.jpg)",
      }),
    },
  },
  plugins: [],
};
