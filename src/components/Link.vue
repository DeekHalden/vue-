<template>
  <li>
    <slot name="heading" >
      <h1 v-on:click="emitEvent">
          Default content
      </h1>
    </slot>
    <a :href="href" target="_blank"> {{ link }} </a>
    <slot name="linkFooter">
      <p> Default bottom content </p>
    </slot>
  </li>
</template>

<script>

import { EventBus } from './eventbus.js'

export default {
  name: 'hello',
  props: [ 'href', 'link' ],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    emitEvent () {
      EventBus.$emit('send', this.msg)
    }
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
