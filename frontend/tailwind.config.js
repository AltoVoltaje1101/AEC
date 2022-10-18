/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/UABCLogo.vue",
    "./layouts/auth.vue",
    "./layouts/default.vue",
    "./pages/auth/login.vue",
    "./pages/clases.vue",
    "./pages/index.vue",
    "./pages/perfil.vue",
  ],
  theme: {
    extend: {
      fill: (theme) => ({
        white: theme('colors.white'),
      }),
      backgroundColor: (theme) => ({
        light: theme('colors.gray-main.300'),
        dark: theme('colors.blue-main.900'),
      }),
      colors:{
        'red-main': {
          600: '#F43D35'
        },
        'gray-main':{
          300: '#EAEDF2',
        },
        'blue-main':{
          800: '#0d1131',
          900: '#070919',
        },
      },
    },
  },
  plugins: [],
}
