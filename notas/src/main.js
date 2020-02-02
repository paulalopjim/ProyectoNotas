import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueRouter from 'vue-router';
import olimpiadas from './components/olimpiadas.vue';
import contenido from './components/contenido.vue';
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);
const routes=[
  {path:'/notas',component:contenido},
  {path:'/olimpiadas',component:olimpiadas},
  {path:'*',component:olimpiadas},
]
const router= new VueRouter({
  routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
