import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  base: "/eeg-project-portfolio/",
  plugins: [react()],
});

