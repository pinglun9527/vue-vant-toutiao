import axios from 'axios'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/',
  timeout: 3000
})

export default request
