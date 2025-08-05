import baseConfig from '@rocketseat/eslint-config/react.mjs'
import importNewLines from 'eslint-plugin-import-newlines'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig } from 'eslint/config'

export default defineConfig(
  { ignores: ['dist', 'src/components/ui', 'src/lib/utils.ts', 'src/routeTree.gen.ts'] },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...baseConfig,
      reactRefresh.configs.vite,
    ],
    plugins: {
      'import-newlines': importNewLines,
    },
    rules: {
      'import-newlines/enforce': ['warn', { items: 40, 'max-len': 80 }],
    }
  },
)
