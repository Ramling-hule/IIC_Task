/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cyber: ['"JetBrains Mono"'], // For Headings
        code: ['"JetBrains Mono"'], // For small text/details
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop')",
        'code-pattern': "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')", 
      }
    },
  },
  plugins: [],
}