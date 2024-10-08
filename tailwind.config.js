/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "420px",
      xsm: "480px",
      sm: "575px",
      zes: "600px",
      xmd: "630px",
      md: "768px",
      mdl: "888px",
      lg: "1025px",
      xl: "1202px",
      xml: "1380px",
      ixml: "1300px",
      xxl: "1650px",
      xtra: "560px",
      xxtra: "480px",
    },
    fontFamily: {
      display: ['"CalSans-SemiBold"', "sans-serif"],
      body: ['"DM Sans"', "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      accent: "#b4bbc9",
      jgrey: "#dee7ed",
      "accent-dark": "#b4bbc9",
      "accent-light": "#b4bbc9",
      "accent-lighter": "#b4bbc9",
      "light-base": "#f4f9fc ",
      "light-base0": "rgb(244,249,252, 0.8) ",
      'custom-cyan': 'rgba(11, 31, 31, 0.5)',
      green: "#10b981",
      orange: "#FEB240",
      red: "#EF4444",
      blue: "#428AF8",
      hovergrey: "#cdd6dc",
      darkhovergrey: "#2d2d39",
      arbiblue: "#14173e",
      black: "#000000",
      jacarta: {
        base: "#5A5D79",
        50: "#000000",
        100: "#000000",
        200: "#000000",
        300: "#000000",
        400: "#000000",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#1e1e1e",
        1000: "#1e1e1e",
        1100: "#1e1e1e",
        9050: "rgba(244, 244, 246, 0.8)",
        9100: "rgba(231, 232, 236, 0.8)",
        9200: "rgba(231, 232, 236, 0.8)",
        9300: "rgba(161, 162, 179, 0.8)",
        9400: "rgba(125, 127, 150, 0.8)",
        9500: "rgba(90, 93, 121, 0.8)",
        9600: "rgba(54, 58, 93, 0.8)",
        9700: "rgba(31, 32, 45, 0.8)",
        9800: "rgba(31, 32, 45, 0.8)",
        9900: "rgba(24, 25, 35, 0.8)",
        10000: "#FFFFFF",
        10100: "#696969",
        10200: "rgba(45, 45, 57, 0.8)",
        10300: "rgba(205, 214, 220, 0.8)",
      },
    },
    boxShadow: {
      none: "none",
      sm: "0px 1px 2px 0px rgba(13, 16, 45, 0.1)",
      base: "0px 1px 2px -1px rgba(68, 172, 228, 0.541), 0px 2px 4px 0px rgba(68, 172, 228, 0.541)",
      md: "0px 2px 4px -2px rgba(68, 172, 228, 0.541), 0px 4px 6px -1px rgba(68, 172, 228, 0.541)",
      lg: "0px 4px 6px -4px rgba(68, 172, 228, 0.541), 0px 10px 15px -3px rgba(68, 172, 228, 0.541)",
      xl: "0px 8px 10px -6px rgba(68, 172, 228, 0.541), 0px 20px 25px -5px rgba(68, 172, 228, 0.541)",
      smd: "0px 1px 2px 0px rgba(53, 73, 255, 0.541)",
      based: "0px 1px 2px -1px rgba(53, 73, 255, 0.541), 0px 2px 4px 0px rgba(53, 73, 255, 0.541)",
      mdd: "0px 2px 4px -2px rgba(53, 73, 255, 0.541), 0px 4px 6px -1px rgba(53, 73, 255, 0.541)",
      lgd: "0px 4px 6px -4px rgba(53, 73, 255, 0.541), 0px 10px 15px -3px rgba(53, 73, 255, 0.541)",
      xld: "0px 8px 10px -6px rgba(53, 73, 255, 0.541), 0px 20px 25px -5px rgba(53, 73, 255, 0.541)",
      "2xl": "0px 25px 50px -12px rgba(13, 16, 45, 0.1), 0px 12px 24px 0px rgba(13, 16, 45, 0.1)",
      "accent-volume": "5px 5px 10px rgba(106, 174, 213, 0.25), inset 2px 2px 6px #7cd1ff, inset -5px -5px 10px #059df0",
      "white-volume": "5px 5px 10px rgba(133, 197, 240, 0.25), inset 2px 2px 6px #e4f1f8, inset -5px -5px 10px #DFE3EF",
      "grey-volume": "5px 5px 10px, inset 2px 2px 6px #2d2d39, inset -5px -5px 10px #2d2d39",
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "normal" }],
      xxs: ["0.50rem", { lineHeight: "normal" }],
      xxxs: ["0.40rem", { lineHeight: "normal" }],
      "2xs": ["0.8125rem", { lineHeight: "normal" }],
      sm: ["0.875rem", { lineHeight: "normal" }],
      base: ["1rem", { lineHeight: "normal" }],
      lg: ["1.25rem", { lineHeight: "normal" }],
      xl: ["1.5rem", { lineHeight: "normal" }],
      xxl: ["3.0rem", { lineHeight: "normal" }],
      "2xl": ["1.75rem", { lineHeight: "normal" }],
      "3xl": ["2rem", { lineHeight: "normal" }],
      "4xl": ["2.25rem", { lineHeight: "normal" }],
      "5xl": ["2.5rem", { lineHeight: "normal" }],
      "6xl": ["3.5rem", { lineHeight: "normal" }],
      "7xl": ["4.25rem", { lineHeight: "normal" }],
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
      xl: "18px",
      l: "5px",
      xxl: "24px"
    },

    extend: {
      borderRadius: {
        "2lg": "0.625rem",
      },
      transitionProperty: {
        height: "height",
        width: "width",
        'transform': 'transform',
      },
      animation: {
        'rotate-180': 'rotate-180 0.5s ease-in-out forwards',
        fly: "fly 6s cubic-bezier(0.75, 0.02, 0.31, 0.87) infinite",
        heartBeat: "heartBeat 1s cubic-bezier(0.75, 0.02, 0.31, 0.87) infinite",
        progress: "progress 5s linear",
        float: 'float 3s ease-in-out infinite',
        'float-rotate': 'float-rotate 3s ease-in-out infinite',
      },
      keyframes: {
        fly: {
          "0%, 100%": { transform: "translateY(5%)" },
          "50%": { transform: "translateY(0)" },
        },
        heartBeat: {
          "0%, 40%, 80%, 100%": { transform: "scale(1.1)" },
          "20%, 60%": { transform: "scale(.8)" },
        },
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        'rotate-180': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
      },
      backgroundImage: {
        'stripe-texture': 'repeating-linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.2) 10px, transparent 10px, transparent 20px)',
        'shroomz': "url('/ShroomZ-Header.png')",
      },
    },
    namedGroups: ["dropdown"],
  },
};