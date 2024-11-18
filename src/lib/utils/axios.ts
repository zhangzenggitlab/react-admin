import axios from 'axios'

export const instance = axios.create({
  timeout: 3000,
  withCredentials: false,
})

/**
 * 添加请求拦截器
 */
instance.interceptors.request.use(function(config) {

  return config
}, function(error) {
  return Promise.reject(error)
})

/**
 * 添加响应拦截器
 */
axios.interceptors.response.use(function(response) {
  if (response.status === 200) {
    return response.data
  }
  return response
}, function(error) {
  return Promise.reject(error)
})