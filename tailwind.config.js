/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0D415D",
        secondary: "#004368",
        tertiary: "#10B981",
        logored: "#D60038",
      },
      fontSize: {
        heading: "2.25rem",
        subheading: "1.5rem",
        text: "1rem",
      },
      lineHeight: {
        heading: "1.2", // Example line-height for heading
        subheading: "1.4", // Example line-height for subheading
        text: "1.6", // Example line-height for text
      },
    },
  },
  plugins: [],
};
