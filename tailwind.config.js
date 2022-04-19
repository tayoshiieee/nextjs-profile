module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        about: "url('/images/bg-about.png')",
        future: "url('/images/bg-future.png')",
        futureSp: "url('/images/bg-future-sp.png')",
        skills: "url('/images/bg-skills.png')",
        skillsSp: "url('/images/bg-skills-sp.png')",
      }),
    },
    letterSpacing: {
      wider: ".05em",
      widest: ".15em",
    },
  },
  plugins: [],
  variants: {
    borderWidth: ["responsive", "first", "hover", "focus"],
  },
};
