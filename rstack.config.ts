// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';

define.lib({
  dts: true,
  syntax: 'es2023',
});

define.test({
  testTimeout: 10_000,
  env: {
    // Let Rsbuild choose the mode based on the command.
    NODE_ENV: undefined,
  },
});

define.fmt({
  singleQuote: true,
  sortPackageJson: true,
});

define.staged({
  '*.{js,jsx,ts,tsx,mjs,cjs,mts,cts}': ['rs lint --fix', 'rs fmt'],
  '*.{json,json5,jsonc,md,mdx,css,scss,less,html,yml,yaml}': 'rs fmt',
});

define.lint(({ js, ts }) => [js.configs.recommended, ts.configs.recommended]);
