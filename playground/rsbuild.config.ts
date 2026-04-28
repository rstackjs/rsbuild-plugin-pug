import { pluginPug } from '../src';

export default {
  plugins: [pluginPug()],
  html: {
    template: './src/index.pug',
  },
};
