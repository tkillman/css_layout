import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
    /** 빌드 옵션 */
    build: {
        /** 빌드 시 이전 결과물 삭제 옵션 */
        emptyOutDir: true,
    },
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: 'src/assets/js/*',
                    dest: 'assets/js',
                },
            ],
        }),
    ],
});
