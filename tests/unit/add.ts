import add from '../../src/add.js'

const { describe, it } = intern.getPlugin('interface.bdd')
const { expect } = intern.getPlugin('chai')

describe('add', () => {
  it('adds 2 positive numbers', () => {
    expect(add(1, 1)).equal(2)
  })
})
