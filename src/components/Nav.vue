<template>
  <ul class="hello">
    <router-link :index="itemIndex" to="/"> home + slot </router-link> 
    <router-link to="/world"> World </router-link> 
    <router-link to="/swiper"> Swiper </router-link> 
    <router-link to="/scopedslot"> ScropedSlot </router-link> 
  </ul>
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
  list-style-type: none;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 5px solid #313233
}

a {
  color: #42b983;
  margin: 0 20px 10px;
}
a:first-of-type {
  margin-left: 0;
  
}
a:last-of-type {
  margin-right: 0
}
</style>

