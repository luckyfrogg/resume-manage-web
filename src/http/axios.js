import axios from 'axios'
import router from '@/router'
import {message} from 'ant-design-vue';
import qs from 'qs'
import Cookies from 'js-cookie'
axios.defaults.timeout = 15000;//响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
// if (process.env.NODE_ENV === 'development') {
//   axios.defaults.baseURL = '/api'
// }
axios.create({
  // 设置超时时间
  timeout: 15000
})
axios.defaults.headers.Authorization = Cookies.get('access_token') || null
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers['x-csrf-token'] = Cookies.get('access_token')
  //在发送请求之前做某件事
  if (config.method === 'post' && config.url!=='/api/f/uploadResume') {
    config.data = qs.stringify(config.data);
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
// 在这里对返回的数据进行处理
// 在这里添加你自己的逻辑
axios.interceptors.response.use(res => {
  let data= res.data
  if(data.code!=200){
    message.error(data.msg)
    return Promise.reject(data.msg)
  }
  return data
}, error => {
  if (error.response.status === 401) {
    var timer = setTimeout(() => {
      router.replace({
        path: '/login'
      })
      clearTimeout(timer)
    }, 3000);

  } else {
    return Promise.reject(error)
  }
})
export function uploadFile(url,formData) {
  return axios.post(url, formData,
    { headers: { 'Content-Type': 'multipart/form-data' } })
}
//返回一个Promise(发送post请求)
export function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}
//返回一个Promise(发送get请求)
export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: param })
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export default {
  fetchPost,
  fetchGet,
}


