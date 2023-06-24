import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import preact from '@preact/preset-vite'
import svgr from 'vite-plugin-svgr'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), svgr()],
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  }
})
