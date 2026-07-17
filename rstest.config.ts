import { defineConfig } from '@rstest/core';

export default defineConfig({
  testTimeout: 10_000,
  env: {
    // Let Rsbuild choose the mode based on the command.
    NODE_ENV: undefined,
  },
  isolate: false,
});
