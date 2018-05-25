import Vue from 'vue'
import Router from 'vue-router'
//  import Home from './views/Home.vue'
// import About from './views/About.vue'
import LoginComponent from './views/Login.vue'
import SecureComponent from './views/Secure.vue'
import RegisterComponent from './views/Register.vue'
//import article from './views/article.vue'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      redirect: {
        name: 'login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    },
    {
      path: '/secure',
      name: 'secure',
      component: SecureComponent
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterComponent
    },

  ]
})