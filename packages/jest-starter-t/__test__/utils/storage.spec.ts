import storage from 'lib/utils/storage'

describe('test storage', () => {

  it('should be able to set and get a value', () => {
    storage.set('foo', 'bar')
    expect(localStorage.getItem('hanhai-t-foo')).toEqual('bar')
  })

  it('localstorage should be able to set and get a value', () => {
    localStorage.setItem('hanhai-t-key1', 'value1')
    expect(storage.get('key1')).toEqual('value1')
  })

  it('clear should be able to clear store', () => {
    storage.set('foo', 'bar')
    expect(storage.get('foo')).toEqual('bar')
    storage.clear()
    expect(localStorage.getItem('hanhai-t-foo')).toBeNull()
  })
})