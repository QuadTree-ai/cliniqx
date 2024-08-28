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
    function({ addUtilities }) {
      const gridBackgroundSVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M0,100 L100,0 M0,50 L100,50 M50,0 L50,100' stroke='%23fff' stroke-width='1'/%3E%3C/svg%3E")`;
      addUtilities({
          '.bg-grid-custom-pattern': {
              backgroundImage: gridBackgroundSVG,
              backgroundSize: '100px 100px', // This controls the size of the grid cells
          },
      });
  }

]

};

export default config;