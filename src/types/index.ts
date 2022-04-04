export type method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'heade'
  | 'HEAD'
  | 'path'
  | 'PATH'

export interface AxiosRequestConfig {
  url: string
  method?: method
  data?: any
  params?: any
}
