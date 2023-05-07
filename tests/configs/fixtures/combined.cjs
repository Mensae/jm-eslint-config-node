/* eslint-env node */

module.exports = {
  extends: [
    '../../../configs/index.cjs',
    '../../../configs/formatting.cjs'
  ].map(require.resolve)
};
