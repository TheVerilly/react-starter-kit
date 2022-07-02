import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [['effector/babel-plugin', { importName: 'effector-logger' }]],
            },
        }),
        tsconfigPaths(),
        svgr({
            exportAsDefault: true,
        }),
        eslint(),
    ],
});
