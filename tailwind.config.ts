import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A1628',
          obsidian: '#1A1A1A',
          gold: '#C8A45C',
          goldLight: '#E8D5A3',
          concrete: '#E0DDD7',
        },
        dark: {
          100: '#2D3748',
          200: '#1A202C',
          300: '#0D1117',
        }
      },
      fontFamily: {
        tajawal: ['var(--font-tajawal)'],
        inter: ['var(--font-inter)'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #C8A45C 0%, #E8D5A3 50%, #C8A45C 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A1628 0%, #1A1A1A 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(200, 164, 92, 0.1)' },
          '100%': { boxShadow: '0 0 40px rgba(200, 164, 92, 0.3)' },
        }
      }
    },
  },
  plugins: [],
};
