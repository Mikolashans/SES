import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from '@/views/MainPageView.vue'
import InWorkPage from '@/views/InWorkPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPageView,
    },
    {
      path: '/soon',
      name: 'soon',
      component: InWorkPage,
    }
  ],
})

export default router
