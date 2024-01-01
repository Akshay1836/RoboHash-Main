/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
        'sm':'500px',
        'md':'750px',
        'lg':'1050px',
        'xl':'1250px',
        '2xl':'1500px'
    },
    extend: {
      colors: {
        'greenshade': "#246F02",
        'yelloshade': "#958D03",
        'card': "#80B116",
        "card_text": "#050300",
        'heading': "#C9E93A",
      },
    },
  },
  plugins: [],
};
