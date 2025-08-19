// tailwind.config.js - Tailwind v4 for JSX
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector", // v4 uses 'selector' instead of 'class'
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./hooks/**/*.{js,jsx}",
    "./utils/**/*.{js,jsx}",
  ],
};
