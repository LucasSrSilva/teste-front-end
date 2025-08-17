import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy:{
       '/api': {
        target: 'https://app.econverse.com.br',
/*Por ser apenas um teste técnico não adicionei como 
variável de ambiente, para facilitar iniciar o projeto*/
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
