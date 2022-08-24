import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Catalogue from '../views/Catalogue.vue'
import Programme from '../views/Programme.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Signin from '../components/Signin.vue'
import Login from '../components/Login.vue'
import PdfFileComponent from "../components/PdfFileComponent.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalogue',
    name: 'Catalogue',
    component: Catalogue
  },
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
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/pdf',
    name: 'PdfFileComponent',
    component: PdfFileComponent
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
