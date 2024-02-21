/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Pink: '#ff52bf',
        'Very-Pale-Cyan': '#ebfbff',
        'Very-Dark-Cyan': '#00252e',
        'Grayish-Blue': '#808d99',
      },
      backgroundImage: {
        'desktop-hero-image': 'url(assets/images/bg-hero-desktop.svg)',
        'mobile-hero-image': 'url(assets/images/bg-hero-mobile.svg)',
      },
    },
  },
  plugins: [],
};
