import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: function () {
      return import('../views/Home.vue')
    },
  },
  {
    path: '/page1',
    name: 'page1',
    component: function () {
      return import('../views/page1.vue')
    },
  },
  {
    path: '/page2',
    name: 'page2',
    component: function () {
      return import('../views/page2.vue')
    },
  },
  {
    path: '/page3',
    name: 'page3',
    component: function () {
      return import('../views/page3.vue')
    },
  },
  {
    path: '/page4',
    name: 'page4',
    component: function () {
      return import('../views/page4.vue')
    },
  },
  {
    path: '/page5',
    name: 'page5',
    component: function () {
      return import('../views/page5.vue')
    },
  },
  {
    path: '/page6',
    name: 'page6',
    component: function () {
      return import('../views/page6.vue')
    },
  },
  {
    path: '/page7',
    name: 'page7',
    component: function () {
      return import('../views/page7.vue')
    },
  },
  {
    path: '/page8',
    name: 'page8',
    component: function () {
      return import('../views/page8.vue')
    },
  },
  {
    path: '/page9',
    name: 'page9',
    component: function () {
      return import('../views/page9.vue')
    },
  },
  {
    path: '/signup',
    name: 'signup',
    component: function () {
      return import('../views/signup.vue')
    },
  },
  {
    path: '/signin',
    name: 'signin',
    component: function () {
      return import('../views/signin.vue')
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
