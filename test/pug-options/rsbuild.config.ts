import { fileURLToPath } from 'node:url';
import { pluginPug } from '@rsbuild/plugin-pug';

export default {
  plugins: [
    pluginPug({
      pugOptions: {
        basedir: fileURLToPath(new URL('./src', import.meta.url)),
      },
    }),
  ],
  html: {
    template: './src/index.pug',
  },
  server: {
    port: 3200,
  },
};
