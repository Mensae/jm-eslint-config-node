/* eslint-env jest */

const nodeConfig = require('../../configs/node-relaxed.cjs');

describe('eslint-config-node-relaxed', () => {
  it('should match the snapshot', () => {
    expect(nodeConfig).toMatchSnapshot();
  });
});
