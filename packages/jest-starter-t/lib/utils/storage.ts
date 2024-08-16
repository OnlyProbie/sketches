const KEY_NAME = 'hanhai-t-'

const set = (key: string, value: string) => {
  localStorage.setItem(KEY_NAME + key, value)
}

const get = (key: string) => {
  return localStorage.getItem(KEY_NAME + key)
}

const storage = {
  get,
  set,
  clear: () => {
    localStorage.clear()
  }
}

export default storage