/* eslint-env jest */

const formattingConfig = require('../../configs/formatting.cjs');

describe('formatting', () => {
  it('should match the snapshot', () => {
    expect(formattingConfig).toMatchSnapshot();
  });
});
