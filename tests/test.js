const { describe, it } = intern.getPlugin('interface.bdd')
const { expect } = intern.getPlugin('chai')

console.log("???")

describe('hello', () => {
  it('greet', () => {
    expect(5).lessThanOrEqual(5)
  })
  it('gresset', () => {
    expect(5).lessThanOrEqual(5)
  })
})
