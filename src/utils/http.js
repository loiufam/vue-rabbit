// axios 基础封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'
import 'element-plus/theme-chalk/el-message.css'

const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// 添加请求拦截器
httpInstance.interceptors.request.use(config => {
  // 统一设置 token
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, error => Promise.reject(error))

// 添加响应拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  // 统一处理错误
  ElMessage({
    type: 'warning',
    message: e.response.data.message
  })
  // 如果是401，清除用户信息
  if (e.response.status === 401) {
    const userStore = useUserStore()
    userStore.clearUserInfo()
    router.push('/login')
  }
  return Promise.reject(e)
})

export default httpInstance
