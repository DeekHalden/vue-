import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import World from '@/components/World'
import Swiper from '@/components/Swiper'
import ScopedSlot from '@/components/ScopedSlot'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      index: '1'
    },
    {
      path: '/world',
      name: 'World',
      component: World,
      index: '2'
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper,
      index: '3'
    },
    {
      path: '/scopedslot',
      name: 'ScopedSlot',
      component: ScopedSlot,
      index: '4'
    }
  ]
})
