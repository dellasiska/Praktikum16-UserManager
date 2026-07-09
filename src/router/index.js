import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import UserView from '../views/UserView.vue'
import UserDetailView from '../views/UserDetailView.vue'
import AddUserView from '../views/AddUserView.vue'
import EditUserView from '../views/EditUserView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: HomeView,
    },

    {
      path: '/dashboard',
      component: DashboardView,
    },

    {
      path: '/users',
      component: UserView,
    },

    {
      path: '/users/add',
      component: AddUserView,
    },

    {
      path: '/users/edit/:id',
      component: EditUserView,
    },

    {
      path: '/users/:id',
      component: UserDetailView,
    },

    {
      path: '/about',
      component: AboutView,
    },

    {
      path: '/contact',
      component: ContactView,
    },
  ],
})

export default router