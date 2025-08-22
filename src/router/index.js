import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SellPropertyView from '@/views/SellPropertyView.vue'
import PropertiesView from '@/views/PropertiesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sell-property',
      name: 'sell-property',
      component: SellPropertyView,
    },
    {
      path: '/properties',
      name: 'properties',
      component: PropertiesView,
    }
  ],
})

export default router
