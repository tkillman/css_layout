import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    /** 빌드 루트 폴더 */
    root: 'src',
    /** 기본 경로 */
    base: './',
    /** 빌드 옵션 */
    build: {
        /** 빌드 폴더, src 에 대해 상대 경로로 지정 */
        outDir: '../dist',
        /** 빌드 시 이전 결과물 삭제 옵션 */
        emptyOutDir: true,
        /** 에셋을 base64 Data URL 로 바꾸지 않기 위한 설정 */
        assetsInlineLimit: 0,
        // /** 빌드 시 사용하는 롤업 설정 */
        rollupOptions: {
            maxParallelFileOps: 300,
            output: {
                /** 정적 리소스(에셋) 파일명 설정 */
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split('.')[1];
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = 'images';
                    }
                    return `assets/${extType}/[name][extname]`;
                },
                manualChunks: {},
            },
        },
    },
    resolve: {
        /** 폴더 경로 별칭 지정 */
        alias: {
            '~/src': path.resolve(__dirname, './src'),
            '~/pages': path.resolve(__dirname, './src/pages'),
            '~/components': path.resolve(__dirname, './src/components'),
            '~/views': path.resolve(__dirname, './src/views'),
            '~/assets': path.resolve(__dirname, './src/assets'),
        },
    },
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: 'assets/js/*',
                    dest: 'assets/js',
                },
            ],
        }),
    ],
});
