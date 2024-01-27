/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "logo-red": "#bf202f",
        gray: {
          "100": "rgba(0, 0, 0, 0.4)",
          "200": "rgba(255, 255, 255, 0.5)",
        },
        "dark-blue": "#002561",
        "logo-blue": "#0071bd",
        black: "#000",
        darkslateblue: "rgba(0, 37, 97, 0.25)",
        text: "#171717",
        floralwhite: "#f6f6ea",
        lavenderblush: "#ffedef",
        "light-grey": "#757575",
        "dark-grey": "#353434",
        whitesmoke: "#f8f8f8",
      },
      spacing: {},
      fontFamily: {
        h3: "Raleway",
        montserrat: "Montserrat",
        h2: "Rubik",
      },
      borderRadius: {
        "3xs": "10px",
        "11xl": "30px",
        xl: "20px",
        mini: "15px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lg: "18px",
      base: "16px",
      xl: "20px",
      sm: "14px",
      "11xl": "30px",
      "31xl": "50px",
      "21xl": "40px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
