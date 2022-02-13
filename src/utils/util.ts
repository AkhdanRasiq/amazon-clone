import CONFIG from '../static/config.json'

export function serverBaseUrl() {
  if (CONFIG.connection.port !== '')
    return CONFIG.connection.protocol + CONFIG.connection.address + CONFIG.connection.port
  return CONFIG.connection.protocol + CONFIG.connection.address
}

export function getApiUrl(strUrl: string) {
  return CONFIG.api.base + strUrl
}

export function arraySplitter(perChunk: number, inputArray: Array<any>) {
  const result = inputArray.reduce((resultArray: Array<any>, item, index) => { 
    const chunkIndex = Math.floor(index/perChunk)

    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []
    }

    resultArray[chunkIndex].push(item)
    return resultArray
  }, [])

  return result
}
