import { createRouter, createWebHistory } from 'vue-router'

import AppLayout from '@/layouts/App.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

const routes = [
  // PUBLIC WEBSITE

  {
    path: '/',
    component: AppLayout,

    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: {
          breadcrumb: 'Home',
        },
      },

      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/About.vue'),
        meta: {
          breadcrumb: 'About',
        },
      },

      {
        path: 'browse',
        name: 'browse',
        component: () => import('@/views/Browse.vue'),

        redirect: '/browse/events',

        children: [
          {
            path: 'events',
            name: 'events',
            component: () => import('@/views/EventList.vue'),
          },

          {
            path: 'events/:id',
            name: 'event-detail',
            component: () => import('@/views/EventDetail.vue'),
          },

          {
            path: 'category',
            name: 'category',
            component: () => import('@/views/Category.vue'),
          },
        ],
      },

      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/Contact.vue'),
      },
    ],
  },

  // DASHBOARD

  {
    path: '/dashboard',

    component: DashboardLayout,

    children: [
      {
        path: '',

        name: 'dashboard',

        component: () => import('@/views/Dasboard.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes,
})

export default router
