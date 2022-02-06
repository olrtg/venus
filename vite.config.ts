import path from 'path'
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [react(), Pages(), Icons({ compiler: 'jsx', jsx: 'react', autoInstall: true })],
})
