/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ZOUK Royal Wine / Plum Palette (Matching Official Logo Medallion)
        wine: {
          950: '#10030A', // Deepest background obsidian plum
          900: '#190511', // Base page background
          850: '#230718', // Elevated cards base
          800: '#320B23', // Card surface
          750: '#420F2F', // Card hover surface
          700: '#541437', // Official Brand Plum Color
          600: '#681A45', // Highlight plum
          500: '#832458', // Active wine accent
          400: '#A13470',
          300: '#C2528D',
        },
        // ZOUK Champagne & Royal Gold Palette (Matching Official "Z." Monogram)
        gold: {
          50: '#FFFEFA',
          100: '#FFF8E7',
          200: '#FCEAA8', // Official Monogram Butter Gold
          300: '#F8DE88',
          400: '#ECCB77', // Soft Champagne
          500: '#DFB74F', // Radiant Logo Gold
          600: '#C69A2E',
          700: '#9E741A',
          800: '#6E4D0D',
          900: '#3D2804',
        },
        // Dark Obsidian Plum Neutral Tones
        dark: {
          950: '#0D0208',
          900: '#14040E',
          850: '#1E0715',
          800: '#2A0A1E',
          750: '#380E28',
          700: '#471333',
          600: '#5C1943',
        },
        cream: {
          50: '#FFFFFF',
          100: '#FAF5EB', // Scalloped Lace Cream
          200: '#F5EEDB',
          300: '#EBDDC0',
          400: '#C8B592',
        }
      },
      fontFamily: {
        serif: ['Marcellus', 'Cinzel', 'Playfair Display', 'serif'],
        brand: ['"Cinzel Decorative"', 'Cinzel', 'Marcellus', 'serif'],
        display: ['Marcellus', 'Cinzel', 'serif'],
        sub: ['Montserrat', 'Plus Jakarta Sans', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Montserrat', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFF8DC 0%, #FCEAA8 30%, #ECCB77 70%, #DFB74F 100%)',
        'gold-gradient-subtle': 'linear-gradient(135deg, rgba(252, 234, 168, 0.18) 0%, rgba(84, 20, 55, 0.18) 100%)',
        'wine-gradient': 'linear-gradient(135deg, #541437 0%, #190511 100%)',
        'wine-card': 'linear-gradient(180deg, rgba(35, 7, 24, 0.94) 0%, rgba(16, 3, 10, 0.98) 100%)',
        'radial-gold': 'radial-gradient(circle at center, rgba(252, 234, 168, 0.22) 0%, rgba(16, 3, 10, 0) 70%)',
        'radial-wine': 'radial-gradient(circle at center, rgba(84, 20, 55, 0.45) 0%, rgba(16, 3, 10, 0) 70%)',
      },
      boxShadow: {
        'gold-sm': '0 0 16px -3px rgba(252, 234, 168, 0.35)',
        'gold-md': '0 0 32px -4px rgba(252, 234, 168, 0.5)',
        'gold-lg': '0 0 55px -5px rgba(252, 234, 168, 0.65)',
        'wine-glow': '0 0 40px -5px rgba(84, 20, 55, 0.7)',
        'card-dark': '0 15px 35px -10px rgba(0, 0, 0, 0.9)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 35s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
