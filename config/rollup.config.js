// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

import pkg from '../package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.json', '.mjs'];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
  ],
  plugins: [
    resolve({ extensions, preferBuiltins: true }),
    commonjs(),
    typescript({ emitDeclarationOnly: true }),
    // babel({
    //   exclude: 'node_modules/**',
    //   include: ['src/**/*'],
    //   extensions,
    // }),
  ],
};
