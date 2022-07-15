module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': ['Acumin Pro'],
      'body': ['"Acumin Pro"'],
    },
    extend: {
      colors : {
        primary : '#4373af',
        secondary : '#82a1cb'
      }
    },
    variants: {
      display: ["group-hover"]
    },
  },
  plugins: [],
}