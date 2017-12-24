import Vue from 'vue'


// Library
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/semantic.min.js'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

// Component
import App from '../app.vue'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import PopularContent from '../components/popular-content.vue'
import NewItem from '../components/new-item.vue'
Vue.component('app-header', Header)
Vue.component('app-footer', Footer)
Vue.component('popular-content', PopularContent)
Vue.component('new-item', NewItem)

// Page
import Top from '../pages/top.vue'
import About from '../pages/about.vue'
import Radio from '../pages/radio.vue'

const router = new VueRouter({
  routes: [
    { path: '/', component: Top },
    { path: '/about', component: About },
    { path: '/radios/:id', name: 'radios', component: Radio },
  ]
})

document.addEventListener('DOMContentLoaded', function () {
  document.body.appendChild(document.createElement('app'))
  const app = new Vue({
    router: router,
    render: function (h) {
      return h(App)
    }
  }).$mount('app')

  console.log(app)
})
