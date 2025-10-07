module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep trust foundation
        primary: {
          50: "#EBF8FF", // blue-50
          100: "#BEE3F8", // blue-100
          200: "#90CDF4", // blue-200
          300: "#63B3ED", // blue-300
          400: "#4299E1", // blue-400
          500: "#3182CE", // blue-500
          600: "#2B77CB", // blue-600
          700: "#2C5282", // blue-700
          800: "#2A4365", // blue-800
          900: "#1A365D", // blue-900
          DEFAULT: "#1A365D", // blue-900
        },
        
        // Secondary Colors - Professional depth
        secondary: {
          50: "#F7FAFC", // gray-50
          100: "#EDF2F7", // gray-100
          200: "#E2E8F0", // gray-200
          300: "#CBD5E0", // gray-300
          400: "#A0AEC0", // gray-400
          500: "#718096", // gray-500
          600: "#4A5568", // gray-600
          700: "#2D3748", // gray-700
          800: "#1A202C", // gray-800
          900: "#171923", // gray-900
          DEFAULT: "#2D3748", // gray-700
        },
        
        // Accent Colors - Warm confidence
        accent: {
          50: "#FFFFF0", // yellow-50
          100: "#FEFCBF", // yellow-100
          200: "#FAF089", // yellow-200
          300: "#F6E05E", // yellow-300
          400: "#ECC94B", // yellow-400
          500: "#D69E2E", // yellow-500
          600: "#D69E2E", // yellow-600
          700: "#B7791F", // yellow-700
          800: "#975A16", // yellow-800
          900: "#744210", // yellow-900
          DEFAULT: "#D69E2E", // yellow-600
        },
        
        // Background Colors
        background: "#FFFFFF", // white
        surface: "#F7FAFC", // gray-50
        
        // Text Colors
        text: {
          primary: "#1A202C", // gray-800
          secondary: "#4A5568", // gray-600
        },
        
        // Status Colors
        success: {
          50: "#F0FFF4", // green-50
          100: "#C6F6D5", // green-100
          500: "#38A169", // green-500
          600: "#319795", // green-600
          DEFAULT: "#38A169", // green-500
        },
        
        warning: {
          50: "#FFFFF0", // yellow-50
          100: "#FEFCBF", // yellow-100
          500: "#D69E2E", // yellow-500
          600: "#D69E2E", // yellow-600
          DEFAULT: "#D69E2E", // yellow-600
        },
        
        error: {
          50: "#FED7D7", // red-50
          100: "#FED7D7", // red-100
          500: "#E53E3E", // red-500
          600: "#C53030", // red-600
          DEFAULT: "#E53E3E", // red-500
        },
        
        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // gray-200
          light: "#F7FAFC", // gray-50
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        accent: ['Space Grotesk', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-sm': ['2.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display': ['2.75rem', { lineHeight: '1.2', fontWeight: '600' }],
        'display-sm': ['2rem', { lineHeight: '1.2', fontWeight: '600' }],
      },
      
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'elevation': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
      
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}