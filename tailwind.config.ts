import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { primary: '#7c6fc4', 'primary-light': '#ede9fb', 'primary-dark': '#534ab7', 'primary-bg': '#f5f3ff', 'primary-mid': '#b8b0e8' } } },
  plugins: [],
}
export default config