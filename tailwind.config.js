const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]'],
  	extend: {
  		fontFamily: {
  			hamlin: ["Hamlin", "sans-serif"],
  			anton: ["Anton", "sans-serif"],
  			/* System monospace stack — no new font file needed. Used for
  			   eyebrows, metadata labels, and nav labels in the redesign. */
  			mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"]
  		},
  		animation: {
  			'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'slide-in-right': 'slideInRight 3s ease-out forwards',
        'slide-in-left': 'slideInLeft 3s ease-out forwards',
        'rotate-left' : 'rotateLeft 1s ease-in-out forwards',
        'rotate-right' : 'rotateRight 1s ease-in-out forwards'
  		},
  		keyframes: {
  			'infinite-scroll': {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(40%)'
  				}
  			},
        slideInRight: {
          '0%': { transform: 'translateX(25%)' },
          '100%': { transform: 'translateX(10%)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-1%)' },
          '100%': { transform: 'translateX(16%)' },
        },
        rotateLeft: {
          '0%' : {transform: 'rotate(0)'},
          '100%': {transform: 'rotate(-30deg)'},
        },
        rotateRight: {
          '0%' : {transform: 'rotate(0)'},
          '100%': {transform: 'rotate(30deg)'},
        },

  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        primary: '#8B0000',
        /* New design-system tokens for the redesign. `blood` is the same
           red as `primary` (kept for backward compatibility with existing
           components) — use `blood` in new code. */
        ink: '#0A0A0A',
        paper: '#F5F3EF',
        blood: '#8B0000',
      }
  	}
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".bg-pos-x-400": {
          "background-position-x": "-420px",
        },
        ".bg-pos-x-800": {
          "background-position-x": "-840px",
        },
        ".bg-pos-x-300": {
          "background-position-x": "-300px",
        },
        ".bg-pos-x-600": {
          "background-position-x": "-600px",
        },
        ".bg-pos-x-150": {
          "background-position-x": "-150px",
        },
      });
    },
      require("tailwindcss-animate")
],
};
