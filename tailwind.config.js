const {
  colors: { white },
} = require("tailwindcss/defaultTheme"); // eslint-disable-line @typescript-eslint/no-var-requires

const colorSchema = {
  base: {
  },
};

module.exports = {
  theme: {
    colors: {
      white,
      ...colorSchema,
    },
    fontFamily: {
      sans: ["Weblysleek-light", "Arial", "Helvetica", "sans-serif"],
      heading: ["Weblysleek-semilight", "Arial", "Helvetica", "sans-serif"],
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      // panel pc has resolution 1366x768
      xl: "1400px",
      // => @media (min-width: 1400px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    backgroundColor: ["responsive", "odd", "hover", "focus"],
  },
  plugins: [],
};
