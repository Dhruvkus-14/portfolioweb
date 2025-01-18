/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enables dark mode with class toggle
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 7s linear infinite', // Horizontal marquee
        'marquee-reverse': 'marquee-reverse 7s linear infinite', // Reverse marquee
        fade: 'fade 7s linear infinite', // Fade-in and fade-out
        'fade-marquee': 'fade-marquee 7s linear infinite', // Combined marquee + fade
        'fade-marquee-reverse': 'fade-marquee-reverse 7s linear infinite', // Combined reverse marquee + fade
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fade: {
          '0%, 90%': { opacity: 1 }, // Fully visible at start and for most of the animation
          '95%, 100%': { opacity: 0 }, // Fades out at the end
        },
        'fade-marquee': {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '10%': { opacity: 1 },
          '90%': { transform: 'translateX(-100%)', opacity: 1 },
          '100%': { opacity: 0 },
        },
        'fade-marquee-reverse': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '10%': { opacity: 1 },
          '90%': { transform: 'translateX(100%)', opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
