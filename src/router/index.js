import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Usuarios from '../views/Usuarios.vue'
import Contacto from '../views/Contacto.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/usuarios', component: Usuarios },
  { path: '/contacto', component: Contacto }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
