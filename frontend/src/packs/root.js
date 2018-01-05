import Vue from 'vue'


// Library
import VueRouter from 'vue-router'
require('es6-promise').polyfill()
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAnalytics from 'vue-analytics'
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/semantic.min.js'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

// Component
import App from '../app.vue'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import RadioPreview from '../components/radio-preview.vue'
import PersonalityCard from '../components/personality-card.vue'
import PersonalitySmall from '../components/personality-small.vue'
import PersonalityFilter from '../components/personality-filter.vue'
Vue.component('app-header', Header)
Vue.component('app-footer', Footer)
Vue.component('radio-preview', RadioPreview)
Vue.component('personality-card', PersonalityCard)
Vue.component('personality-small', PersonalitySmall)
Vue.component('personality-filter', PersonalityFilter)

// Page
import Contact from '../pages/contact.vue'
import Top from '../pages/top.vue'
import About from '../pages/about.vue'
import Personalities from '../pages/personalities.vue'
import Personality from '../pages/personality.vue'
import Radio from '../pages/radio.vue'

const router = new VueRouter({
  mode: 'history',
  base: '/app/',
  routes: [
    { path: '/', component: Top },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/personalities', component: Personalities },
    { path: '/personalities/:id', name: 'personality', component: Personality },
    { path: '/radios/:id', name: 'radios', component: Radio },
  ]
})

Vue.use(VueAnalytics, {
  id: 'UA-107670560-1',
  router: router,
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
