import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Product from '../views/Product.vue'
import Search from '../views/Search.vue'
import Contact from '../views/Contact.vue'
import Cart from '../views/Cart.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import MyAccount from '../views/MyAccount.vue'
import Checkout from '../views/Checkout.vue'
import store from '../store'
import Reset from '../views/Reset.vue'
import Success from '../views/Success.vue'
import PassChange from '../views/PassChange.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/password-change',
    name: 'PassChange',
    component: PassChange
  },
  {
    path: '/reset/:token',
    name: 'Reset',
    component: Reset
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component: MyAccount,
    meta: {
        requireLogin: true
    }
  },
  {
    path: '/cart/success',
    name: 'Success',
    component: Success
  },
  {
    path: '/cart/checkout',
    name: 'Checkout',
    component: Checkout,
    meta: {
        requireLogin: true
    }
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
        requireLogin: true
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/:category_slug/:product_slug/',
    name: 'Product',
    component: Product,
  },
  {
    path: '/:category_slug/',
    name: 'Category',
    component: Category,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next({ name: 'LogIn', query: { to: to.path } });
  } else {
    next()
  }
})

export default router
