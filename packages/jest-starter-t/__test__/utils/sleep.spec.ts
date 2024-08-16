import sleep from 'lib/utils/sleep'

/**
 * 测试 sleep 函数
 *
 * 该测试用例使用 jest.useFakeTimers() 模拟 setTimeout 的行为
 * 涉及对 javascript 执行顺序的理解，具体可参考: https://zh.javascript.info/event-loop
 *
 */

describe('sleep', () => {

  beforeAll(() => {
    jest.useFakeTimers()
  })

  it('should return a promise', () => {
    expect(sleep(10)).toBeInstanceOf(Promise)
  })

  it('should resolve after the specified time', async () => {

    const callbackFn = jest.fn()

    const act = async (callback: () => void) => {
      await sleep(1000)
      callback()
    }

    const promise = act(callbackFn)

    expect(callbackFn).not.toHaveBeenCalled()
    // 清算 Jest Message Queue 的回调，其中会执行 setTimeout 里的 resolve 函数
    jest.runAllTimers()
    // 执行 callback 内容
    await promise

    expect(callbackFn).toHaveBeenCalledTimes(1)
  })
})