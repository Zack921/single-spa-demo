import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue' // 负责为vue应用生成通用的生命周期钩子，在子应用注册到single-spa的基座应用时需要用到

Vue.config.productionTip = false

const appOptions = {
  el: '#microApp',
  router,
  render: h => h(App)
}

// 支持应用独立运行、部署，不依赖于基座应用
if (!window.singleSpaNavigate) {
  delete appOptions.el
  new Vue(appOptions).$mount('#app')
}

// 基于基座应用，导出生命周期函数
const vueLifecycle = singleSpaVue({
  Vue,
  appOptions
})

export function bootstrap (props) {
  console.log('app1 bootstrap')
  return vueLifecycle.bootstrap(() => {})
}

export function mount (props) {
  console.log('app1 mount')
  return vueLifecycle.mount(() => {})
}

export function unmount (props) {
  console.log('app1 unmount')
  return vueLifecycle.unmount(() => {})
}
