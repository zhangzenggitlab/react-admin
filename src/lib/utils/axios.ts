import axios, { AxiosInterceptorOptions, AxiosRequestHeaders } from 'axios'
import {message} from 'antd'

const instance = axios.create({
  baseURL: _API_,
  timeout: 3000,
  withCredentials: false,
})

interface HeaderType extends Omit<AxiosInterceptorOptions,'headers'> {
  headers:AxiosRequestHeaders &{
    /**
     * 后端接受token
     */
    satoken?:string
  }
}
/**
 * 添加请求拦截器
 */
instance.interceptors.request.use(function(config:HeaderType) {
  config.headers.satoken = localStorage.getItem("token") ||''

  return config
}, function(error) {
  return Promise.reject(error)
})

/**
 * 添加响应拦截器
 */
instance.interceptors.response.use(function(response) {
  console.log(response.data)
  if (response.status === 200 && response.data.code === 200) {
    return response.data.data
  }else {
    message.error(response.data.msg)
    $.utils.router.useNavigate()("/login")

    return Promise.reject()
  }
}, function(error) {
  return Promise.reject(error)
})

export const http = {
  post: async <T, R>(url: string, data: T): Promise<R> => {
    return instance({
      method:"post",
      url,
      data
    })
  },
  get: async <T, R>(url: string, params: T): Promise<R> => {
    return instance({
      method:"get",
      url,
      params
    })
  },
}