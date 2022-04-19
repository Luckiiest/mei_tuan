import axios from '@/axios.js'

var api = {
  // 获取热门搜索字段
  getSearchHotWords(params) {
    return axios.get('/api/meituan/header/searchHotWords', params)
  },
  // 获取搜索列表字段
  getSearchList(params) {
    return axios.get('/api/meituan/header/search', params)
  },
  // 获取首页导航
  getMenuList() {
    return axios.get('/api/meituan/index/nav')
  },
  // 首页下方，有格调内容区数据获取
  getResultByKeyWords() {
    return axios.get('/api/meituan/index/resultByKeywords')
  },
  // 产品展示列表获取
  getProductsList() {
    return axios.get('/api/meituan/list/goodsList')
  },
  // 获取热门城市
  getHotCity() {
    return axios.get('/api/meituan/city/hot')
  },
  // 最近搜索城市
  getRecentCity() {
    return axios.get('/api/meituan/city/recents')
  },
  // 获取城市列表
  getProvinceList() {
    return axios.get('/api/meituan/city/province')
  },
  //获取当前地理位置
  getCurrentPosition() {
    return axios.get('/api/meituan/city/getPosition')
  },
  // 登陆验证
  login(params) {
    return axios.get('/api/meituan/login', params)
  },
  //注册验证
  register(params) {
    return axios.get('/api/meituan/register', params)
  },
}

export default api
