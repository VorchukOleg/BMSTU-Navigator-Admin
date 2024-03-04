import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const makeConfig = ({ mode }: { mode: string }) => {
    Object.assign(process.env, loadEnv(mode, process.cwd()));

    // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME

    return defineConfig({
        server: {
            proxy: {
                [`${process.env.VITE_LOCAL_API_PREFIX ?? ''}`]: {
                    target: process.env.VITE_BACKEND_URL,
                    changeOrigin: true,
                    secure: false,
                    rewrite: (path) =>
                        path.replace(
                            new RegExp(
                                `${process.env.VITE_LOCAL_API_PREFIX ?? ''}/`,
                                'g',
                            ),
                            '',
                        ),
                },
            },
        },
        plugins: [react()],
        resolve: {
            alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "./src/styles/variables"; @import "./src/styles/mixins";`,
                },
            },
        },
    });
};

export default makeConfig;

// https://vitejs.dev/config/
