import type { Config, PluginCreator } from "tailwindcss";
import svgToDataUri from "mini-svg-data-uri";

// Define a plugin to add a custom background grid pattern
const gridPatternPlugin: PluginCreator = ({ addUtilities }) => {
  const gridBackgroundSVG = svgToDataUri(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'>
      <path d='M0,0 L100,0 L100,100 L0,100 Z M0,50 L100,50 M50,0 L50,100' stroke='#fff' stroke-width='1'/>
    </svg>`
  );

  addUtilities({
    '.bg-grid-custom-pattern': {
      backgroundImage: `url("${gridBackgroundSVG}")`,
      backgroundSize: '100px 100px', // Controls the size of the grid cells
      backgroundRepeat: 'repeat' // Ensures the grid repeats across the element
    },
  });
};

// TailwindCSS configuration with TypeScript
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
  plugins: [gridPatternPlugin]
};

export default config;
