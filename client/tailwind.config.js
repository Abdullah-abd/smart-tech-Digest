/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        watermelon: "#FC6471", // 🍉 Primary red
        mint: "#B9FBC0", // 🍃 Accent green
        lightbg: "#F9FAFB", // ⚪ Light background
        darktext: "#2E2E2E", // Dark heading/text
        faded: "#F3F4F6", // Subtle card background (gray-100)
        bubble: "#FFEFF1", // Light red for highlights or badges
        muted: "#9CA3AF", // Subtle secondary text (gray-400)
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
      borderRadius: {
        card: "1.25rem", // For rounded card styles
      },
      boxShadow: {
        soft: "0 4px 14px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
