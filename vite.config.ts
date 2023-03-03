import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
// https://vitejs.dev/config/
import viteCompression from 'vite-plugin-compression';
export default defineConfig({
  plugins: [
    react(),
    viteCompression(),
    visualizer() as unknown as PluginOption
    // viteEslint({
    //   failOnError: false
    // })
  ],

  build:{
    rollupOptions:{
      output:{
        manualChunks:{
          react:['react', 'react-dom', 'react-router'],
          lodash:['lodash-es']
        }
      }
    }
  },

  css: {
    modules: {}
  }
})
