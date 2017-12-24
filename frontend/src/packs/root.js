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
import NewItem from '../components/new-item.vue'
import PersonalityCard from '../components/personality-card.vue'
Vue.component('app-header', Header)
Vue.component('app-footer', Footer)
Vue.component('new-item', NewItem)
Vue.component('personality-card', PersonalityCard)

// Page
import Contact from '../pages/contact.vue'
import Top from '../pages/top.vue'
import About from '../pages/about.vue'
import Personalities from '../pages/personalities.vue'

const router = new VueRouter({
  mode: 'history',
  base: '/app/',
  routes: [
    { path: '/', component: Top },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/personalities', component: Personalities },
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
