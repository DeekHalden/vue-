import Vue from 'vue'
import Router from 'vue-router'
import resource from 'vue-resource'
import Items from '@/components/item/Items'
import World from '@/components/World'
import VueCookie from 'vue-cookie'
import AsyncComputed from 'vue-async-computed'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(Router)
Vue.use(resource)
Vue.use(VueCookie)
Vue.use(AsyncComputed)
Vue.use(VueGoogleMaps, {
  load: {
    key: ''
  }
})

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Items',
      component: Items,
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
    }
  ]
})

