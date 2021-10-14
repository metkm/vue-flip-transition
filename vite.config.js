import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import typescript from "rollup-plugin-typescript2";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "vue-flip-transition",
      fileName: (format) => `vue-flip-transition.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      },
      plugins: [typescript()]
    }
  }  
})
