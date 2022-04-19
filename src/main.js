import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

// 全局点击事件
Vue.directive('document-click', {
  bind(el, binding, vnode) {
    document.addEventListener('click', binding.value, false)
  },
  inserted() {
    console.log('inserted')
  },
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
