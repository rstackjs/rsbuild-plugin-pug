// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';
import { pluginPug } from '../src/index.ts';

define.app({
  plugins: [pluginPug()],
  html: {
    template: './src/index.pug',
  },
});
