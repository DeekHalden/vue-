<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      
      <link-component v-for="link in links" :key="link.index" :href="link.href" :link="link.text">
        <!-- <h1 slot="heading"> Content passed from parent </h1> -->

        <p slot="linkFooter"> Bottom content passed from parent </p>
      </link-component>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import LinkComponent from '@/components/Link'

import { EventBus } from './eventbus.js'

export default {
  name: 'hello',
  components: { LinkComponent },
  data () {
    return {
      links: [
        {
          href: 'https://vuejs.org',
          text: 'vue'
        },
        {
          href: 'https://vuejs.org',
          text: 'vue'
        },
        {
          href: 'https://vuejs.org',
          text: 'vue'
        },
        {
          href: 'https://vuejs.org',
          text: 'vue'
        }
      ],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    EventBus.$on('send', (info) => {
      alert(info)
    })
  },
  beforeDestroy () {
    EventBus.$off('send')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
