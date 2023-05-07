/**
 * @file Configuration only concerned with styling issues for the Node.js environment.
 * @author Johan Meester
 * @see LICENSE file in root directory for full license.
 */

/* eslint-env node */

const ERROR = 'error';

module.exports = Object.freeze({
  env: {
    es2022: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },

  plugins: ['n'],

  reportUnusedDisableDirectives: true,

  rules: Object.freeze({
    // #region PLUGINS

    // #region n

    // #region n->Stylistic Issues

    /*
     * Require `return` statements after callbacks
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/callback-return.md
     * Category: Stylistic Issues
     */
    'n/callback-return': ERROR,

    /*
     * Enforce either `module.exports` or `exports`
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/exports-style.md
     * Category: Stylistic Issues
     */
    'n/exports-style': ERROR,

    /*
     * Enforce the style of file extensions in `import` declarations
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/file-extension-in-import.md
     * Category: Stylistic Issues
     */
    'n/file-extension-in-import': ERROR,

    /*
     * Require `require()` calls to be placed at top-level module scope
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/global-require.md
     * Category: Stylistic Issues
     */
    'n/global-require': ERROR,

    /*
     * Disallow `require` calls to be mixed with regular variable declarations
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-mixed-requires.md
     * Category: Stylistic Issues
     */
    'n/no-mixed-requires': ERROR,

    /*
     * Disallow the use of `process.env`
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-env.md
     * Category: Stylistic Issues
     */
    'n/no-process-env': ERROR,

    /*
     * Disallow specified modules when loaded by `import` declarations
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-restricted-import.md
     * Category: Stylistic Issues
     */
    'n/no-restricted-import': ERROR,

    /*
     * Disallow specified modules when loaded by `require`
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-restricted-require.md
     * Category: Stylistic Issues
     */
    'n/no-restricted-require': ERROR,

    /*
     * Disallow synchronous methods
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-sync.md
     * Category: Stylistic Issues
     */
    'n/no-sync': ERROR,

    /*
     * Enforce either `Buffer` or `require("buffer").Buffer`
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/buffer.md
     * Category: Stylistic Issues
     */
    'n/prefer-global/buffer': ERROR,

    /*
     * Enforce either `console` or `require("console")`
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/console.md
     * Category: Stylistic Issues
     */
    'n/prefer-global/console': ERROR,

    /*
     * Enforce either `process` or `require("process")`
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/process.md
     * Category: Stylistic Issues
     */
    'n/prefer-global/process': ERROR,

    /*
     * Enforce either `TextDecoder` or `require("util").TextDecoder`
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/text-decoder.md
     * Category: Stylistic Issues
     */
    'n/prefer-global/text-decoder': ERROR,

    /*
     * Enforce either `TextEncoder` or `require("util").TextEncoder`
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/text-encoder.md
     * Category: Stylistic Issues
     */
    'n/prefer-global/text-encoder': ERROR,

    /*
     * Enforce either `URL` or `require("url").URL`
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/url.md
     * Category: Stylistic Issues
     */
    'n/prefer-global/url': ERROR,

    /*
     * Enforce either `URLSearchParams` or `require("url").URLSearchParams`
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/url-search-params.md
     * Category: Stylistic Issues
     */
    'n/prefer-global/url-search-params': ERROR,

    /*
     * Enforce `require("dns").promises`
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-promises/dns.md
     * Category: Stylistic Issues
     */
    'n/prefer-promises/dns': ERROR,

    /*
     * Enforce `require("fs").promises`
     * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-promises/fs.md
     * Category: Stylistic Issues
     */
    'n/prefer-promises/fs': ERROR

    // #endregion n->Stylistic Issues

    // #endregion n

    // #endregion PLUGINS
  })
});
