<template>
  <div class="hello">
    <ul :items="items">
      <template slot="item" scope="props">
        <li> {{ props.text }}</li>
      </template>
      
    </ul>
  </div>
</template>

<script>
import ScopedSlotItem from '@/components/ScopedSlotItem'
export default {
  name: 'hello',
  components: { ScopedSlotItem },
  data () {
    return {
      items: [
        'vue', 'vue', 'vue', 'vue'
      ],
      msg: 'Welcome to Your Vue.js App'
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
