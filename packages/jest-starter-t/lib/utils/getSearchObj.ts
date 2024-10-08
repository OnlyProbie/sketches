const getSearchObj = () => {

  const { search } = window.location

  const searchStr = search.slice(1)

  const pairs = searchStr.split('&')

  const searchObj: Record<string, string> = {}

  pairs.forEach((pair) => {
    const [key, value] = pair.split('=')
    searchObj[key] = decodeURIComponent(value)
  })

  return searchObj
}

export default getSearchObj