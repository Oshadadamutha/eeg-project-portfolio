import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages';

// Replace with your GitHub repo name
const repoName = 'eeg-project-portfolio';

export default defineConfig({
  plugins: [react(), ghPages()],
  base: `/${repoName}/`,  // important for GitHub Pages
});
