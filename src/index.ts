import { transformRequest } from './helpers/data'
import { buildUrl } from './helpers/url'
import { AxiosRequestConfig } from './types'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  processsConfig(config)
  xhr(config)
}

// 处理config
const processsConfig = (config: AxiosRequestConfig):void => {
  config.url = transformURL(config)
  config.data = transformRequestData(config)
}

// 转换url
const transformURL = (config: AxiosRequestConfig): string => {
  const { url, params } = config
  return buildUrl(url, params)
}

const transformRequestData = (config: AxiosRequestConfig): any => {
  return transformRequest(config.data)
}

export default axios
