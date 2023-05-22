/* eslint-env node */

module.exports = {
  extends: [
    '../../../configs/node-relaxed.cjs',
    '../../../configs/formatting-relaxed.cjs'
  ].map(require.resolve)
};
