module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-10": "var(--black-10)",
        "black-100": "var(--black-100)",
        "black-40": "var(--black-40)",
        "black-5": "var(--black-5)",
        "black-60": "var(--black-60)",
        "otherblue-100": "var(--otherblue-100)",
        "otherblue-20": "var(--otherblue-20)",
        "othergreen-100": "var(--othergreen-100)",
        "othergreen-20": "var(--othergreen-20)",
        "otherorange-100": "var(--otherorange-100)",
        "otherorange-20": "var(--otherorange-20)",
        "otherpink-100": "var(--otherpink-100)",
        "otherpink-20": "var(--otherpink-20)",
        "otherpurple-100": "var(--otherpurple-100)",
        "otherpurple-20": "var(--otherpurple-20)",
        "otherviolet-100": "var(--otherviolet-100)",
        "otheryellow-100": "var(--otheryellow-100)",
        "white-10": "var(--white-10)",
        "white-100": "var(--white-100)",
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
      fontFamily: {
        "paragraph-regular-medium":
          "var(--paragraph-regular-medium-font-family)",
        "paragraph-small-regular": "var(--paragraph-small-regular-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: 'marquee 20s linear infinite',
        whitespace: 'whitespace-nowrap'
      },
      
      
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
