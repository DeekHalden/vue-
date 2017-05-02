<template>
  <transition name="fade">
    <div class="hello" transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active {
  transition-delay: .25s;
    
  
}
.fade-enter-active, .fade-leave-active {
  height: 0;
  padding: 0;
  opacity: 0;
}
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
