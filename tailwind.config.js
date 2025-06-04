/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#FFC107', // Amarelo/Laranja vibrante para CTAs
          primaryHover: '#FFA000',
          secondary: '#2563EB', // Azul para elementos secundários
          secondaryHover: '#1D4ED8',
          dark: '#1F2937',    // Cinza escuro para texto principal
          light: '#F9FAFB',   // Cinza claro para fundos de seção
          muted: '#6B7280',   // Cinza para texto secundário/descrições
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-bg-placeholder.webp')", // Placeholder
      }
    },
  },
}