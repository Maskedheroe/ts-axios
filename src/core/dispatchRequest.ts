import { transformRequest, transformResponse } from '../helpers/data'
import { processHeaders } from '../helpers/headers'
import { buildUrl } from '../helpers/url'
import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from '../types'
import xhr from './xhr'

function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processsConfig(config)
  return xhr(config).then((res) => {
    return transformResponseData(res)
  })
}

// 处理config
const processsConfig = (config: AxiosRequestConfig):void => {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

// 转换url
const transformURL = (config: AxiosRequestConfig): string => {
  const { url, params } = config
  return buildUrl(url!, params)
}

const transformRequestData = (config: AxiosRequestConfig): any => {
  return transformRequest(config.data)
}

const transformHeaders = (config: AxiosRequestConfig): any => {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}


function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res)
  return res
}

export default dispatchRequest
