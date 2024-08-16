import sum  from 'lib/utils/sum'

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    expect(sum(2, 4)).toBe(6)
  })
})