import type { Config } from "tailwindcss";
import svgToDataUri from "mini-svg-data-uri";

// Define a type for the utility function parameters to resolve TypeScript errors
interface UtilityPlugin {
  addUtilities: (utilities: any, options?: any) => void;
}

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        capriola: ["Capriola", "sans-serif"],
        baumans: ["Baumans", "cursive"],
        lovers: ["Lovers Quarrel", "cursive"],
      },
      colors: {
        // Custom color scheme
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }: UtilityPlugin) {
      const gridBackgroundSVG = svgToDataUri(
        `<svg viewBox="0 0 32 32" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="30" height="30" fill="none" stroke="rgba(255, 255, 255, 0.4)" stroke-width="2"/>
        </svg>`
      );

      addUtilities({
        '.bg-grid': {
          backgroundImage: `url("${gridBackgroundSVG}")`
        },
      });
    },
  ],
};

export default config;