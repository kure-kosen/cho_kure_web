import Vue from '../../node_modules/vue';


// Library
import VueRouter from '../../node_modules/vue-router';

Vue.use(VueRouter);


// Component
import App from '../app.vue';
import Test from '../components/test.vue';


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/test',
      component: Test
    }
  ]
});

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app'));
  const app = new Vue({
    router,
    render: h => h(App)
  }).$mount('app');

  console.log(app);
});
