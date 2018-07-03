import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home'
import List from '../page/List'
import My from '../page/My'
import Mz from '../page/Mz'
import Film from '../page/Film'
import City from '../page/City'
import Ka from "../page/Ka"
import Nplaying from "../components/Nplaying"
import Coming from  "../components/Coming"
import Kc from "../components/Kc"
import Kd from "../components/Kd"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/mz',
      name: 'Mz',
      component: Mz,
      children:[
        {
          path: '/',
          component: Nplaying,
        },
        {
          path: '/nplaying',
          name: 'Nplaying',
          component: Nplaying,
        } ,
        {
          path: '/coming',
          name: 'Coming',
          component: Coming,
        },
      ]

    } ,
    {
      path: '/list',
      name: 'List',
      component: List,

    },
    {
      path: '/ka',
      name: 'Ka',
      component: Ka,
      children:[
        {
          path: '/',
          component: Kc,
        },
        {
          path: '/Kc',
          name: 'Kc',
          component: Kc,
        } ,
        {
          path: '/kc',
          name: 'Kd',
          component: Kd,
        },
      ]

    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/film/:id',
      name: 'Film',
      component: Film
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      component: {template: '<div>页面丢失了</div>'}
    }
  ]
})
