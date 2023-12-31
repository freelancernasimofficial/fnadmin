import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  darkMode: 'class',
  theme: {
    screens: {
      '2xl': { max: '1536px' },

      xl: { max: '1280px' },

      lg: { max: '1024px' },

      md: { max: '768px' },

      sm: { max: '640px' },

      xs: { max: '500px' },
    },
    fontSize: {
      sm: '0.875rem',
      base: '0.95rem',
      xl: '1rem',
      '2xl': '1.2rem',
      '3xl': '1.4rem',
      '4xl': '1.6rem',
      '5xl': '1.8rem',
      '6xl': '2rem',
      '7xl': '2.2rem',
      '8xl': '2.5rem',
      '9xl': '2.8rem',
      '10xl': '3rem',
    },
    container: {
      center: true,
    },

    extend: {
      zIndex: {
        5: '5',
        15: '15',
        25: '25',
        35: '35',
        45: '45',
        55: '55',
        60: '60',
        65: '65',
        70: '70',
        75: '75',
        80: '80',
        85: '85',
        90: '90',
        95: '95',
        100: '100',
      },

      width: {
        '100': '400px',
      },
      padding: {
        18: '4.5rem',
      },
      colors: {
        FnPrimary: '#3718ff',
        FnSecondary: '#ff004f',
        FnError: '#f44336',
        FnIndigo: '#651fff',
        FnSuccess: '#00c852',
        FnInfo: '#04cbff',
        FnWarning: '#ff9103',
        FnYellow: '#ffcb00',
        FnLinkDark: '#2a9eff',
      },
    },
  },
  plugins: [],
}
export default config
