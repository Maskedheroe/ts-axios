import { AxiosInstance } from './types/index';
import Axios from './core/Axios';
import { extend } from './helpers/util';

function createInstance(): AxiosInstance {
  
  const context = new Axios()

  const instance = Axios.prototype.request.bind(context)

  // 将 axios 构造成类和方法的混合类型
  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createInstance()

export default axios
