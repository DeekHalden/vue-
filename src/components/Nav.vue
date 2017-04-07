<template lang="pug">
  ul.hello
    router-link(to="/home") home + slot 
    router-link(to="/world") World 
    router-link(to="/swiper") Swiper 
    router-link(to="/transitions") Transitions 
    router-link(to="/velocity") Velocity 
</template>

<script>
export default {
  name: 'navi',
  props: ['itemIndex'],
  data () {
    return {
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
  margin: 0 auto;
  width: auto;
  list-style-type: none;
  padding: 20px 0;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
  border-bottom: 5px solid #313233
}

a {
  display: block;
  color: #42b983;
  float: left;
  margin: 0 20px 10px;
}

a.router-link-active {
  color: red;
}

a:first-of-type {
  margin-left: 0;
  
}
a:last-of-type {
  margin-right: 0
}
</style>

