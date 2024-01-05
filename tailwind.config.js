/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#193654',
          DEFAULT: '#162b46',
          dark: '#122640',
        },
        pokepurple: '#6b2dc8',
        pokeblue: {
          sober: '#2777cc',
          dark: '#193654',
          darker: '#162b46',
          light: '#015ab9',
          DEFAULT: '#004395',
        },
        pokeyellow: {
          active: '#f3a90a',
          DEFAULT: '#ffcc00',
        },
      },
    },
  },
  plugins: [],
};
