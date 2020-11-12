const { add } = require('../build/index');

test('add', () => {
    expect(add(1, 2)).toBe(3);
});
