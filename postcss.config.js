/**
 * PostCSS configuration for Tailwind CSS. Angular’s build system will pick
 * up this file automatically when processing styles. This configuration
 * simply loads Tailwind and autoprefixer.
 */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};