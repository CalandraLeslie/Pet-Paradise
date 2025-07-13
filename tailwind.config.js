/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          blue: '#4A90E2',      // Calming, trustworthy
          green: '#7CB342',     // Nature, health
          orange: '#FF8C00',    // Energy, playfulness
        },
        // Pet category colors
        pet: {
          dog: '#8B4513',       // Warm brown for dogs
          cat: '#708090',       // Cool gray for cats
          bird: '#FFD700',      // Bright yellow for birds
          fish: '#00CED1',      // Aqua blue for fish
          rabbit: '#DDA0DD',    // Soft purple for rabbits
          reptile: '#9ACD32',   // Yellow green for reptiles
        },
        // UI colors
        ui: {
          background: '#FAFAFA',
          surface: '#FFFFFF',
          muted: '#F5F5F5',
          border: '#E0E0E0',
          text: {
            primary: '#212121',
            secondary: '#757575',
            muted: '#9E9E9E',
          }
        },
        // Status colors
        status: {
          success: '#4CAF50',
          warning: '#FF9800',
          error: '#F44336',
          info: '#2196F3',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 4px 25px -5px rgba(0, 0, 0, 0.07)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
      },
    },
  },
  plugins: [],
}
