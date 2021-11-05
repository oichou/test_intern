// const { registerSuite } = intern.getPlugin('interface.object');
import intern from 'intern'
// import { suite, test } from 'intern/lib/interfaces/tdd';

const { suite, test } = intern.getPlugin('interface.tdd')
const { assert } = intern.getPlugin('chai');

// const { registerSuite } = intern.getPlugin('interface.object');
// import { suite, test } from 'intern/lib/interfaces/tdd';

const { describe, it } = intern.getPlugin('interface.bdd');
const { expect } = intern.getPlugin('chai');

describe('hello', () => {
  it('greet', () => {
    expect(5).lessThanOrEqual(5)
  });
  it('gresset', () => {
    expect(5).lessThanOrEqual(5)
  });
});

// tests/unit/component.ts
// const { registerSuite } = intern.getPlugin('interface.object');

suite('hello', () => {
  test('greet', () => {
    assert.strictEqual(5,5);
    assert.strictEqual(10,10);
  });
});
