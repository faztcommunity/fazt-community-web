import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import svelte from 'rollup-plugin-svelte'
import alias from '@rollup/plugin-alias'
import sveltePreprocess from 'svelte-preprocess'
import svelteSVG from 'rollup-plugin-svelte-svg'
import { terser } from 'rollup-plugin-terser'
import json from '@rollup/plugin-json'
import config from 'sapper/config/rollup.js'
import pkg from './package.json'

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

const onwarn = (warning, onwarn) =>
  (warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
  (warning.code === 'CIRCULAR_DEPENDENCY' &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning)

const preprocess = sveltePreprocess({
  postcss: true,
  scss: {
    includePaths: ['src/styles'],
  },
})

const projectRootDir = path.resolve(__dirname)
const customResolver = resolve({
  extensions: ['.mjs', '.js', '.json', '.svelte'],
})

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        preventAssignment: true,
        values: {
          'process.browser': true,
          'process.env.NODE_ENV': JSON.stringify(mode),
        },
      }),
      svelte({
        preprocess,
        compilerOptions: {
          dev,
          hydratable: true,
        },
      }),
      alias({
        entries: [
          {
            find: 'utils',
            replacement: path.resolve(projectRootDir, 'src/utils'),
          },
          {
            find: 'assets',
            replacement: path.resolve(projectRootDir, 'src/assets'),
          },
          {
            find: '@components',
            replacement: path.resolve(projectRootDir, 'src/components'),
          },
        ],
        customResolver,
      }),
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      commonjs(),
      svelteSVG({ dev }),
      json(),

      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
          babelHelpers: 'runtime',
          exclude: ['node_modules/@babel/**'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead',
              },
            ],
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        preventAssignment: true,
        values: {
          'process.browser': false,
          'process.env.NODE_ENV': JSON.stringify(mode),
        },
      }),
      svelte({
        preprocess,
        compilerOptions: {
          dev,
          generate: 'ssr',
          hydratable: true,
        },
        emitCss: false,
      }),
      alias({
        entries: [
          {
            find: 'utils',
            replacement: path.resolve(projectRootDir, 'src/utils'),
          },
          {
            find: 'assets',
            replacement: path.resolve(projectRootDir, 'src/assets'),
          },
          {
            find: '@components',
            replacement: path.resolve(projectRootDir, 'src/components'),
          },
        ],
        customResolver,
      }),
      resolve({
        dedupe: ['svelte'],
      }),
      commonjs(),
      svelteSVG({ generate: 'ssr', dev }),
      json(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules
    ),

    preserveEntrySignatures: 'strict',
    onwarn,
  },
}
