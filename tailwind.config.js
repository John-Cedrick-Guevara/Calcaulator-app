/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg1: "hsl(222, 26%, 31%)",
        keyBg1: "hsl(30, 25%, 89%)",
        keyShadow1: " hsl(28, 16%, 65%)",
        keyColor1: "hsl(221, 14%, 31%)",
        equal1: "hsl(6, 63%, 50%)",
        equalactive1: "hsl(6, 70%, 34%)",
        screenBg1: "hsl(224, 36%, 15%)",
        delete1: "hsl(225, 21%, 49%)",
        deleteShadow1: "hsl(224, 28%, 35%)",
        keypadBg1: "hsl(223, 31%, 20%)",
        keyHover1 : "hsl(30, 25%, 100%)",
        delHover1 : "hsl(225, 21%, 58.8%) ",
        equalHover1 : "hsl(6, 63%, 60%)",

        bg2: "hsl(0, 0%, 90%)",
        keyBg2: "hsl(45, 7%, 89%)",
        keyShadow2: " hsl(35, 11%, 61%)",
        keyColor2: " hsl(60, 10%, 19%)",
        equal2: "hsl(25, 98%, 40%)",
        equalactive2: "hsl(25, 99%, 27%)",
        screenBg2: "hsl(0, 0%, 93%)",
        delete2: "hsl(185, 42%, 37%)",
        deleteShadow2: "hsl(185, 58%, 25%)",
        keypadBg2: "hsl(0, 5%, 81%)",
        keyHover2 : "hsl(45, 7%, 100%)",
        delHover2 : "hsl(185, 42%, 44.4%)",
        equalHover2 : "hsl(25, 98%, 48%)",

        bg3: "hsl(268, 75%, 9%)",
        keyBg3: "hsl(290, 70%, 36%)",
        keyShadow3: "hsl(285, 91%, 52%)",
        keyColor3: "hsl(52, 100%, 62%)",
        equal3: "hsl(176, 100%, 44%)",
        equalactive3: "hsl(177, 92%, 70%)",
        screenBg3: "hsl(268, 71%, 12%)",
        delete3: "hsl(281, 89%, 26%)",
        deleteShadow3: "hsl(285, 91%, 52%)",
        keypadBg3: "hsl(268, 71%, 12%)",
        keyHover3 : "hsl(290, 70%, 39.6%)",
        delHover3 : "hsl(281, 89%, 31.2%)",
        equalHover3 : " hsl(176, 100%, 52.8%) ",
      },
    },
  },
  plugins: [],
};