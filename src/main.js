import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './routes.js'
import {store} from './store/index'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  router:router,
  store:store
})

