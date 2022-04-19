import axios from 'axios'

axios.defaults.baseURL = 'https://www.fastmock.site/mock/aa83bd4cc0a2b01d07904f02ceea29ad/meituan'
axios.interceptors.request.use(
  function (config) {
    config.params = {
      ...config.params,
      appkey: 'abcd',
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default axios
