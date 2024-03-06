/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "rgba(255, 255, 255, 0.07)",
          "200": "rgba(255, 255, 255, 0.8)",
          "300": "rgba(255, 255, 255, 0.5)",
          "400": "rgba(250, 250, 250, 0.95)",
          "500": "rgba(255, 255, 255, 0.55)",
          "600": "rgba(255, 255, 255, 0.4)",
          "700": "rgba(255, 255, 255, 0.9)",
          "800": "rgba(255, 255, 255, 0.3)",
        },
        white: "#fff",
        black: "#000",
        springgreen: {
          "100": "#42ff54",
          "200": "rgba(66, 255, 84, 0.2)",
        },
      },
      spacing: {},
      fontFamily: {
        avenir: "Avenir",
        alata: "Alata",
        blinker: "Blinker",
      },
    },
    fontSize: {
      smi: "13px",
      mini: "15px",
      base: "16px",
      "21xl": "40px",
      "13xl": "32px",
      "5xl": "24px",
      lg: "18px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
