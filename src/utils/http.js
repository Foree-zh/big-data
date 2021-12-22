import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000 // 超时时间
}) 

// request 拦截器
service.interceptors.request.use(
    config => {
        // 请求之前  做一些操作
        return config
    },
    error => {
        // 请求错误 
        console.log(error)
        return Promise.reject(error)
    }
)

// 响应拦截
service.interceptors.response.use(
    response => {
        const res = response.data
        if(res.code == 200) {
            return res
        }
    },
    error => {
        console.log(error)
    }
)

export default service