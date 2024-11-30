import axios, { AxiosInterceptorOptions, AxiosRequestHeaders } from 'axios'
import { message } from 'antd'

const instance = axios.create({
  baseURL: _API_,
  timeout: 3000,
  withCredentials: false,
})

interface HeaderType extends Omit<AxiosInterceptorOptions, 'headers'> {
  headers: AxiosRequestHeaders & {
    /**
     * 后端接受token
     */
    satoken?: string
  }
}

/**
 * 添加请求拦截器
 */
instance.interceptors.request.use(function(config: HeaderType) {
  config.headers.satoken = localStorage.getItem('token') || ''

  return config
}, function(error) {
  return Promise.reject(error)
})

/**
 * 添加响应拦截器
 */
instance.interceptors.response.use(function(response) {
  if (response.status === 200 && response.data.code === 200) {
    return response.data.data
  }

  if (response.data.code == 401) {
    const protocol = window.location.protocol
    const host = window.location.host

   location.href = `${protocol}//${host}/login`
  }

  message.error(response.data.msg)
  return Promise.reject()
}, function(error) {
  return Promise.reject(error)
})

export const http = {
  /**
   * @T body的参数类型
   * @R 接口返回值类型
   * @param url 接口地址
   * @param data body参数
   */
  post: async <T, R>(url: string, data: T): Promise<R> => {
    return instance({
      method: 'post',
      url,
      data,
    })
  },
  get: async <T, R>(url: string, params: T): Promise<R> => {
    return instance({
      method: 'get',
      url,
      params,
    })
  },
}