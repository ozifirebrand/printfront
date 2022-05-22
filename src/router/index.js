import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from "@/views/WelcomePage";
import OrderPage from "@/views/OrderPage";

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomePage,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/order-page',
    name: 'order-page',
    component: OrderPage,
  },
  {
    path: '/home',
    name: 'welcome',
    component: WelcomePage,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
