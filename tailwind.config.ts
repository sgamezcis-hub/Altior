import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de lujo ALTIOR
        cream: {
          50: '#FEFBF7',
          100: '#FDF9F3',
          200: '#FCF3E8',
          300: '#F5EDE2',
          400: '#EDE3D5',
        },
        beige: {
          50: '#F9F5F0',
          100: '#F0E8E0',
          200: '#E8DED5',
          300: '#DCCAC0',
          400: '#D4B8A8',
          500: '#C89A7B',
          600: '#B88260',
          700: '#9B6B4F',
          800: '#7A5239',
          900: '#5C3F2E',
        },
        ivory: '#FFFEF9',
        gold: {
          light: '#D4AF89',
          default: '#C9A961',
          dark: '#B8860B',
        },
        warm: {
          white: '#FAF8F5',
          gray: '#EDE8E3',
        },
      },
      fontFamily: {
        sans: ['Montserrat Alternates', 'Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'safe-left': 'max(1rem, env(safe-area-inset-left))',
        'safe-right': 'max(1rem, env(safe-area-inset-right))',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(135deg, #F9F5F0 0%, #FDF9F3 100%)',
        'gradient-luxury': 'linear-gradient(135deg, #FAF8F5 0%, #F0E8E0 100%)',
      },
    },
  },
  plugins: [],
}

export default config
