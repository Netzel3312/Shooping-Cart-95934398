import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/*vite config*/
export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [react()],
});

