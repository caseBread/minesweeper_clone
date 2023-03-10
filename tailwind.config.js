/** @type {import('tailwindcss').Config} */
const px0To200 = { ...Array.from(Array(201)).map((_, i) => `${i * 0.25}rem`) };

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  safelist: [{ pattern: /w-./ }],
  theme: {
    extend: {
      width: px0To200,
    },
  },
  plugins: [],
};
