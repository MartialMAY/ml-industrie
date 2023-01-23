import { createWebHistory, createRouter } from 'vue-router'
import Home from '../App.vue'
//import App from '../App.vue'
//import Catalogue from '../views/Catalogue.vue'
import Programme from '../views/Programme.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Signup from '../components/Signup.vue'
//import Login from '../components/Login.vue'
import PdfFileComponent from "../components/PdfFileComponent.vue";
import Maintenance from "../components/Maintenance.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  /* {
    path: '/catalogue',
    name: 'Catalogue',
    component: CatalogueLa
  }, */
  {
    path: '/programme',
    name: 'Programme',
    component: Programme
  },
  {
    path: '/header',
    name: 'Header',
    component: Header
  },
  {
    path: '/footer',
    name: 'Footer',
    component: Footer
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
 /*  {
    path: '/login',
    name: 'Login',
    component: Login
  }, */
  {
    path: '/pdf',
    name: 'PdfFileComponent',
    component: PdfFileComponent
  },
  {
    path: '/maintenance',
    name: 'Maintenance',
    component: Maintenance
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router