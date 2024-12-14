import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';

// import { terser } from 'rollup-plugin-terser';

const inputs = ['src/examples/mock_ui/index.tsx', 'src/client.ts', 'src/client.test.ts'];

export default inputs.map(input => ({
  input: input, // Your main entry point
  output: {
    file: `dist/${input.split('/').pop().replace('.tsx', '.js').replace('.ts', '.js')}`,
    format: 'iife', // Immediately-invoked function expression
    sourcemap: 'inline',
    inlineDynamicImports: true,
    strict: false,
    globals: {
      "react/jsx-runtime":"jsxRuntime",
      "react-dom/client":"ReactDOM",
      "react":"React"
    },
    name: 'App' // Global name for your app
  },
  onwarn: function (warning, warn) {
    if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
      return;
    }
    warn(warning);
  },
  plugins: [
    
    typescript(),
    resolve({extensions: ['.js', '.jsx', '.ts', '.tsx']}), // Resolve Node.js modules
    commonjs(), // Transform CommonJS modules to ES modules
    replace({preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('dev')}),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
      // extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    postcss({
      plugins: [autoprefixer()],
      sourceMap: true,
      extract: true,
      minimize: true
  })
  ]
}));
