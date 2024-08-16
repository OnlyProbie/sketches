import getSearchOb from 'lib/utils/getSearchObj'

describe('getSearchObj', () => {
  it('should return an object with the search params', () => {

    // global.jsdom.reconfigure({
    //   url: 'http://localhost:3000/?search=test'
    // })

    window.location.href = 'http://localhost:3000/?search=test'
    const result = getSearchOb()
    expect(result).toEqual({
      search: 'test'
    })
  })
})
