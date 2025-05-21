import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: 'CNAME',
          dest: '.' // copies CNAME to the root of the outDir (docs)
        }
      ]
    })
  ],
  build: {
    outDir: 'docs'
  }
})