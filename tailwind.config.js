/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'baltic-blue': '#22577A',
        'tropical-teal': '#38A3A5',
        'mint-leaf': '#57CC99',
        'light-green': '#80ED99',
        'tea-green': '#C7F9CC',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        swimperhentian: {
          "primary": "#22577A",      // Baltic Blue
          "secondary": "#38A3A5",    // Tropical Teal
          "accent": "#57CC99",       // Mint Leaf
          "neutral": "#2a2a2a",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#e5e7eb",
          "info": "#38A3A5",         // Tropical Teal
          "success": "#57CC99",      // Mint Leaf
          "warning": "#80ED99",      // Light Green
          "error": "#ef4444",
        },
      },
    ],
  },
}

