import after1000ms from 'lib/utils/after1000ms'

describe('after1000ms', () => {

  beforeAll(() => {
    jest.useFakeTimers()
  })

  it('should return a promise', () => {

    jest.spyOn(global, 'setTimeout')

    const callback = jest.fn()

    expect(callback).not.toHaveBeenCalled()

    after1000ms(callback)

    jest.runAllTimers()

    expect(callback).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000)
  })
})