import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#1a1f2c",
        foreground: "#ffffff",
        gold: {
          DEFAULT: "#c4a052",
          light: "#d4b062",
          dark: "#b49042"
        },
        card: {
          DEFAULT: "rgba(32, 37, 49, 0.8)",
          hover: "rgba(32, 37, 49, 0.95)"
        },
        muted: {
          DEFAULT: "#374151",
          foreground: "#9CA3AF"
        }
      },
      backgroundImage: {
        'hero': "linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.8)), url('/lovable-uploads/409f5d31-4ba2-4a37-b937-f2b8da36dbaf.png')"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;