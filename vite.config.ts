import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import inject from '@rollup/plugin-inject'

const rootPath = process.cwd()
const srcPath = path.resolve(rootPath, 'src')

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      _TITLE_: JSON.stringify(env.VITE_TITLE),
      _API_:JSON.stringify(env.VITE_API),
    },
    plugins: [react(),
      inject({
        modules: {
          $: [path.join(srcPath, 'lib'), '*'],
        },
        include: ['**/*.ts', '**/*.tsx'],
      })],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }
})
