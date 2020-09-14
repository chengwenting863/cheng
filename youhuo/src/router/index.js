import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import Homepage from '../views/home/homepage/home-page'
import Classification from '../views/home/classification/classification'
import Stroll from "../views/home/stroll/stroll"
import Shoppingcar from '../views/home/shopping-cart/shopping-cart'
import My from '../views/home/my/my'
import Newshop from '../views/home/newshop/newshop'
import Two from '../views/home/newshop/two'
import Three from '../views/home/newshop/three'
import Four from '../views/home/newshop/four'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/home/homepage'
  },
  {
    path:'/home',
    component:Home,
    children:[
      {
        path:'/home/homepage',
        component:Homepage,
       
      },
      {
        path:'/home/classification',
        component:Classification
      },
      {
        path:'/home/stroll',
        component:Stroll
      },
      {
        path:'/home/shopping-cart',
        component:Shoppingcar
      },
      {
        path:'/home/my',
        component:My
      },
      {
        path:'/home/newshop',
        component:Newshop,
        children:[
          {
            path:'two',
            component:Two
          },
          {
            path:'three',
            component:Three
          },
          {
            path:'four',
            component:Four
          }
        ]
      }
    ]
  }
  
]

const router = new VueRouter({
  routes
})

export default router
