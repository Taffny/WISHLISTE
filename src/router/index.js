import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'
import Books from '@/components/Books.vue'
import Cart from '@/components/Cart.vue'
import Library from '@/components/Library.vue'
import Profile from '@/components/Profile.vue'
import ViewBook from '@/components/ViewBook.vue'
import Admin from '@/components/Admin.vue'
import WishList from '@/components/WishList.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', //starting point thus path should be empty
      component: LandingPage
    },
    {
      path:'/admin', //should be in small letters
      component:Admin
    },
    {
      path:'/books',
      component:Books
    },
    {
      path:'/cart',
      component:Cart
    },
    {
    path:'/library',
      component:Library
    },
    {
    path:'/profile',
      component:Profile
    },
    {
      path:'/view_book', //underscore is for separating
      component:ViewBook
    },
    {
    path:'/wish_list',
      component:WishList
    }
  ],
})

export default router
