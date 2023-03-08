const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        handwriting: ['Comforter', ...defaultTheme.fontFamily.serif],
      },
      animation: {
        'stretch': 'stretch 10s ease-in-out infinite',
      },
      keyframes: {
        stretch: {
          '0%': { rotate: '0deg' },
          '50%': { scale: '1 1.5' },
          '100%': { rotate: '360deg' },
        }
      }
    },
	},
	plugins: [],
}
