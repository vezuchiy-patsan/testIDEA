import path from 'path';

import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(),
		legacy({
			targets: ['defaults', 'ie >=11']
		})
	],
	resolve: {
		alias: [
			{ find: '@', replacement: path.resolve(__dirname, 'src') },
			// https://github.com/tabler/tabler-icons/issues/1233#issuecomment-2428245119 проблемы с динамическим импортом пак иконок
			{ find: '@tabler/icons-react', replacement: '@tabler/icons-react/dist/esm/icons/index.mjs' },
		],
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern',
			},
		},
	},
});
