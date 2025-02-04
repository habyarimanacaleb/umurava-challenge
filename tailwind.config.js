// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Make sure to include your file paths here
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#2B71F0",
        customDark: "#001A40",
      },
    },
  },
  plugins: [],
};
