/* eslint-env jest */

const formattingConfig = require('../../configs/formatting-relaxed.cjs');

describe('formatting-relaxed', () => {
  it('should match the snapshot', () => {
    expect(formattingConfig).toMatchSnapshot();
  });
});
