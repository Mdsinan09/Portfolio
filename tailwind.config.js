/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#faf9f6",
        ink: "#121314",
        "ink-muted": "#52525b",
        "ink-subtle": "#71717a",
        borderline: "#e7e5e4",
        accent: {
          DEFAULT: "#4f46e5",
          purple: "#574cc6",
          lavender: "#7E74F0",
          tint: "#EDEBFD",
        },
        surface: {
          DEFAULT: "#faf9f6",
          lowest: "#ffffff",
          low: "#f3f4f3",
          container: "#eeeeed",
          high: "#e8e8e7",
          highest: "#e2e2e2",
          variant: "#e2e2e2",
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
