 /** @type {import('tailwindcss').Config} */
export default {
   content: ['./*.html'],
   screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
   },
   theme: {
     extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        logo: ['Loved by the King', 'cursive']
      },
      colors: {
        'dark': '#111',
        'light': '#fffcfa',
        'grey-dark': '#333',
        'grey-light': '#ccc',
        'grey-light-extra': '#eee',
        'green-bg': '#57ed4c',
        'blue-bg': '#0c69dc',
        'red-bg': '#ca2020',
        'orange-bg': '#ff4500',
        'yellow-bg': '#c9ac0b'
      }
     },
   },
   plugins: [],
 }

