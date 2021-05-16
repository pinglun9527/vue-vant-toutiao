import axios from 'axios'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/',
  timeout: 2000
})

export default request
