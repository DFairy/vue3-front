import { createRouter, createWebHistory } from 'vue-router'
import { isMobile } from '@/utils/flexible.js'
import mobileRoutes from './module/mobileRoute'
import pcRouters from './module/pcRouter'

const router = createRouter({
  history: createWebHistory(),
  routes: isMobile.value ? mobileRoutes : pcRouters,
})

export default router
