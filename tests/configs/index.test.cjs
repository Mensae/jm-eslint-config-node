/* eslint-env jest */

const nodeConfig = require('../../configs/index.cjs');

describe('eslint-config-node', () => {
  it('should match the snapshot', () => {
    expect(nodeConfig).toMatchSnapshot();
  });
});
