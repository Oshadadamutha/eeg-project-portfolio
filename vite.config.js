import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages';

// Replace with your GitHub repo name
const repoName = 'your-repo-name';

export default defineConfig({
  plugins: [react(), ghPages()],
  base: `/${repoName}/`,  // important for GitHub Pages
});
