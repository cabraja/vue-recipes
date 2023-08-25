import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import { ValidationProvider, ValidationObserver,extend,  } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
// PAGES
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Category from './pages/Category'
import './assets/tailwind.css'

Vue.config.productionTip = false

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

const routes = [
  {path: '/', component: Home},
  {path: '/login', component: Login},
  {path:'/register', component: Register},
  {path:'/category/:categoryName', component: Category}
]

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.use(VueRouter);
const router = new VueRouter({routes});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
