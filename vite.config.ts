import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: './',
    plugins: [tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        // 1. 關鍵修正：解決 "Rollup failed to resolve import 'vue'"
        // 強制 Vite 指向包含 compiler 的完整版 ESM 模組
        'vue': 'vue/dist/vue.esm-bundler.js',
        
        // 2. 修正別名路徑：通常指向 src 或是專案根目錄
        // 建議確保這裡與你 tsconfig.json 的 paths 一致
        '@': path.resolve(__dirname, './src'), 
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    // 3. 額外保險：確保 Rollup 知道如何處理 vue
    build: {
      rollupOptions: {
        external: [], // 確保 vue 沒有被意外排除
      }
    }
  };
});