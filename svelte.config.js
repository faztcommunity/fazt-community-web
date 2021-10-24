import path from 'path'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    target: 'body',

    adapter: adapter(),

    vite: {
      resolve: {
        alias: {
          '@utils': path.resolve('./src/utils'),
          '@assets': path.resolve('./src/assets'),
          '@components': path.resolve('./src/components'),
        }
      },
      // css: {
      //   preprocessorOptions: {
      //     scss: {
      //       additionalData: '@import "src/styles/utils";'
      //     }
      //   }
      // }
    }
  },

  preprocess: preprocess()

  // preprocess: [
  //   preprocess({
  //     scss: {
  //       prependData: '@import "src/styles/utils";'
  //     }
  //   })
  // ]
};

export default config;
