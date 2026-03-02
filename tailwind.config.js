/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Syne", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        primary: {
          DEFAULT: "#6C63FF",
          dark: "#4B44CC",
          light: "#8B85FF",
        },
        accent: {
          DEFAULT: "#00D4FF",
          dark: "#00A3CC",
        },
        dark: {
          DEFAULT: "#0A0A0F",
          100: "#0F0F1A",
          200: "#141428",
          300: "#1A1A35",
          400: "#252545",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #6C63FF 0%, #00D4FF 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "gradient-shift": "gradientShift 8s ease infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(108, 99, 255, 0.4)" },
          "100%": {
            boxShadow:
              "0 0 40px rgba(108, 99, 255, 0.8), 0 0 80px rgba(0, 212, 255, 0.3)",
          },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(108, 99, 255, 0.3)",
        "glow-md": "0 0 30px rgba(108, 99, 255, 0.5)",
        "glow-lg": "0 0 60px rgba(108, 99, 255, 0.6)",
        "glow-accent": "0 0 30px rgba(0, 212, 255, 0.5)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
