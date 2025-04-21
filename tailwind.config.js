/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts}'],
    theme: {
      extend: {
        /* borne ≥ 1280 px ET ratio ≥ 3/2 → pas d’impact mobile/desktop */
        screens: { kiosk: { raw: '(min-width:1280px) and (min-aspect-ratio:3/2)' } },
        fontSize: {
          'kiosk-base': ['1.5rem', { lineHeight: '2rem' }],
          'kiosk-h1':   ['4rem',   { lineHeight: '1.1'  }],
        },
      },
    },
    plugins: [],
  };
  