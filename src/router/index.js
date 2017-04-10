import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import World from '@/components/World'
import Swiper from '@/components/Swiper'
import Transitions from '@/components/Transitions'
import Velocity from '@/components/ScopedSlot'
import Notemaster from '@/components/Notemaster'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/home',
      name: 'Hello',
      component: Hello,
      meta: {
        index: 1
      }
    },
    {
      path: '/world',
      name: 'World',
      component: World,
      meta: {
        index: 2
      }
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper,
      meta: {
        index: 3
      }
    },
    {
      path: '/transitions',
      name: 'transitions',
      component: Transitions,
      meta: {
        index: 4
      }
    },
    {
      path: '/velocity',
      name: 'velocity',
      component: Velocity,
      meta: {
        index: 5
      }
    },
    {
      path: '/notemaster',
      name: 'notemaster',
      component: Notemaster,
      meta: {
        index: 6
      }
    }
  ]
})

