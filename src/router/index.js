import { createRouter, createWebHistory } from 'vue-router'
import CoursesViewVue from '@/views/CoursesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CourseList',
      component: CoursesViewVue
    },
    {
      path: '/about',
      name: 'CourseDetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CourseDetailView.vue')
    }
  ]
})

export default router
