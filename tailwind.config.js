/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionProperty: {
        'transform': 'transform',
        'opacity': 'opacity',
      },
      transitionDuration: {
        '600': '600ms',
      },
      transitionTimingFunction: {
        'out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      colors: {
        primary: '#0B2239',
        'primary-light': '#1B3B5B',
        accent: '#00A6E6',
        'accent-hover': '#0090CC',
        yellow: '#FFD700',
        'yellow-light': '#FFE44D',
      },
    },
  },
  plugins: [],
}
