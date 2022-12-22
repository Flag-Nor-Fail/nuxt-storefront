import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{ts,js}',
    'plugins/**/*.{ts,js}',
    'App.{ts,js,vue}',
    'app.{ts,js,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          foreground: 'rgb(var(--primary-foreground), <alpha-value>)',
          background: 'rgb(var(--primary-background), <alpha-value>)',
        },
        secondary: {
          foreground: 'rgb(var(--secondary-foreground), <alpha-value>)',
          background: 'rgb(var(--secondary-background), <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
