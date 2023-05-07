/**
 * @file Configuration only concerned with problems and best practices for the Node.js environment.
 * @author Johan Meester
 * @see LICENSE file in root directory for full license.
 */

/* eslint-env node */

const OFF = 'off';
const ERROR = 'error';

module.exports = Object.freeze({
  env: {
    es2022: true,
    node: true
  },

  overrides: [
    /* CommonJS */
    {
      files: ['*.cjs', '.*.cjs'],

      parserOptions: { ecmaVersion: 'latest' },

      rules: {
        /*
         * Forbid CommonJS `require` calls and `module.exports` or `exports.*`.
         * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md
         */
        'import/no-commonjs': OFF,

        /*
         * Prefer JavaScript modules (ESM) over CommonJS.
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
         */
        'unicorn/prefer-module': OFF
      }
    },

    /* ECMAScript Module */
    {
      files: ['*.mjs', '.*.mjs'],

      parserOptions: { ecmaVersion: 'latest' }
    },

    /* TypeScript */
    {
      files: ['*.ts'],

      rules: {
        /*
         * Enforce the style of file extensions in `import` declarations.
         * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/file-extension-in-import.md
         */
        'n/file-extension-in-import': [ERROR, 'never']
      }
    }
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },

  plugins: ['@microsoft/sdl', 'import', 'n', 'unicorn'],

  reportUnusedDisableDirectives: true,

  rules: Object.freeze({
    // #region PLUGINS

    // #region @microsoft/sdl

    /*
     * Do not allocate uninitialized buffers in Node.js.
     * https://github.com/microsoft/eslint-plugin-sdl/blob/main/docs/rules/no-unsafe-alloc.md
     */
    '@microsoft/sdl/no-unsafe-alloc': ERROR,

    // #endregion @microsoft/sdl

    // #region import

    /*
     * Forbid the use of extraneous packages.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
     * Type: problem
     */
    'import/no-extraneous-dependencies': [
      ERROR,
      {
        devDependencies: [
          '**/__mocks__/**',
          '**/__tests__/**',
          '**/.eslintrc.{js,cjs,ts}',
          '**/*.e2e-spec.*',
          '**/*.e2e.*',
          '**/*.spec.*',
          '**/*.test.*',
          '**/cypress.config.{js,ts}',
          '**/Gruntfile{,.js,.ts}',
          '**/gulpfile.{js,ts}',
          '**/gulpfile.*.{js,ts}',
          '**/jest.config.{js,ts}',
          '**/jest.setup.{js,ts}',
          '**/karma.conf.{js,ts}',
          '**/nuxt.config.{js,ts}',
          '**/protractor.conf.{js,ts}',
          '**/protractor.conf.*.{js,ts}',
          '**/rollup.config.{js,ts}',
          '**/rollup.config.*.{js,ts}',
          '**/setupTests.{js,ts}',
          '**/spec/**',
          '**/test/**',
          '**/tests/**',
          '**/vite.config.{js,ts}',
          '**/vue.config.{js,ts}',
          '**/webpack.config.{js,ts}',
          '**/webpack.config.*.{js,ts}'
        ],
        optionalDependencies: false,
        peerDependencies: false,
        bundledDependencies: false,
        includeTypes: true
      }
    ],

    // #endregion import

    // #region n

    // #region n->Best Practices

    /*
     * Disallow deprecated APIs
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-deprecated-api.md
     * Category: Best Practices
     * Recommended: Yes
     */
    'n/no-deprecated-api': ERROR,

    // #endregion n->Best Practices

    // #region n->Possible Errors

    /*
     * Require error handling in callbacks
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/handle-callback-err.md
     * Category: Possible Errors
     */
    'n/handle-callback-err': [ERROR, '^.*(e|E)rror'],

    /*
     * Enforce Node.js-style error-first callback pattern is followed
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-callback-literal.md
     * Category: Possible Errors
     */
    'n/no-callback-literal': ERROR,

    /*
     * Disallow the assignment to `exports`
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-exports-assign.md
     * Category: Possible Errors
     * Recommended: Yes
     */
    'n/no-exports-assign': ERROR,

    /*
     * Disallow `import` declarations which import extraneous modules
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-extraneous-import.md
     * Category: Possible Errors
     * Recommended: Yes
     */
    'n/no-extraneous-import': ERROR,

    /*
     * Disallow `require()` expressions which import extraneous modules
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-extraneous-require.md
     * Category: Possible Errors
     * Recommended: Yes
     */
    'n/no-extraneous-require': ERROR,

    /*
     * Disallow `import` declarations which import non-existence modules
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-import.md
     * Category: Possible Errors
     * Recommended: Yes
     */
    'n/no-missing-import': ERROR,

    /*
     * Disallow `require()` expressions which import non-existence modules
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-require.md
     * Category: Possible Errors
     * Recommended: Yes
     */
    'n/no-missing-require': ERROR,

    /*
     * Disallow `new` operators with calls to `require`
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-new-require.md
     * Category: Possible Errors
     */
    'n/no-new-require': ERROR,

    /*
     * Disallow string concatenation with `__dirname` and `__filename`
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-path-concat.md
     * Category: Possible Errors
     */
    'n/no-path-concat': ERROR,

    /*
     * Disallow the use of `process.exit()`
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-exit.md
     * Category: Possible Errors
     * Recommended: Yes
     */
    'n/no-process-exit': ERROR,

    /*
     * Disallow `bin` files that npm ignores
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-bin.md
     * Category: Possible Errors
     * Recommended: Yes
     */
    'n/no-unpublished-bin': ERROR,

    /*
     * Disallow `import` declarations which import private modules
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-import.md
     * Category: Possible Errors
     * Recommended: Yes
     */
    'n/no-unpublished-import': ERROR,

    /*
     * Disallow `require()` expressions which import private modules
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-require.md
     * Category: Possible Errors
     * Recommended: Yes
     */
    'n/no-unpublished-require': ERROR,

    /*
     * Disallow unsupported ECMAScript built-ins on the specified version
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/es-builtins.md
     * Category: Possible Errors
     * Recommended: Yes
     */
    'n/no-unsupported-features/es-builtins': ERROR,

    /*
     * Disallow unsupported ECMAScript syntax on the specified version
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/es-syntax.md
     * Category: Possible Errors
     * Recommended: Yes
     */
    'n/no-unsupported-features/es-syntax': ERROR,

    /*
     * Disallow unsupported Node.js built-in APIs on the specified version
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/node-builtins.md
     * Category: Possible Errors
     * Recommended: Yes
     */
    'n/no-unsupported-features/node-builtins': ERROR,

    /*
     * Require that `process.exit()` expressions use the same code path as `throw`
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/process-exit-as-throw.md
     * Category: Possible Errors
     * Recommended: Yes
     */
    'n/process-exit-as-throw': ERROR,

    /*
     * Require correct usage of shebang
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/shebang.md
     * Category: Possible Errors
     * Recommended: Yes
     */
    'n/shebang': ERROR,

    // #endregion n->Possible Errors

    // #endregion n

    /*
     * Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the
     * deprecated `new Buffer()`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-buffer.md
     * Recommended: Yes
     */
    'unicorn/no-new-buffer': ERROR,

    /*
     * Prefer `EventTarget` over `EventEmitter`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-event-target.md
     */
    'unicorn/prefer-event-target': ERROR,

    /*
     * Prefer reading a JSON file as a buffer.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-json-parse-buffer.md
     * Recommended: Yes
     */
    'unicorn/prefer-json-parse-buffer': ERROR,

    /*
     * Prefer using the `node:` protocol when importing Node.js builtin modules.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md
     * Recommended: Yes
     */
    'unicorn/prefer-node-protocol': ERROR

    // #endregion PLUGINS
  })
});
