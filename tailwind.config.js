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
      colors: {
        'main': '#ff4500',
        'support': '00ffff',
        'dark': '#111',
        'light': '#fffcfa',
        'grey-dark': '#333',
        'grey-medium': '#999',
        'grey-light': '#ccc',
        'grey-light-extra': '#eee',
      }
     },
   },
   plugins: [],
 }

