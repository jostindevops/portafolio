/**
 * Tailwind configuration tailored for the DevSecOps dashboard. The darkMode is
 * set to "class" so that dark styles are applied whenever the `dark` class
 * appears on an ancestor element. Custom colors and shadows are defined to
 * match the futuristic command center aesthetic described by the user.
 */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        // Terminal green used to indicate safe or healthy states
        'terminal-green': '#00ff9f',
        // Neon cyan used for active elements and highlights
        'neon-cyan': '#00ffff',
      },
      fontFamily: {
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 15px #00ffff',
        'neon-green': '0 0 15px #00ff9f',
      },
    },
  },
  plugins: [],
};