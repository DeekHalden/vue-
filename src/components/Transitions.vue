<template lang="pug">
  div
    transition(name="fade" mode="out-in")
      button(@click="show = !show") {{ show ? 'SWITCH' : 'greet'}}
    transition(name="fade" mode="out-in")
      p(v-if="show" key="show") yo, peace, c`mon
      p(v-else key="hide") Sry, nothing left to say
</template>
<script>
  export default {
    data () {
      return {
        show: true
      }
    }
  }
</script>
<style scoped lang="stylus">
  button
    border 0
    background-color beige
    padding 20px 0
    width 200px
    box-shadow 10px 10px 20px 0px rgba(0,0,0,.5)
    &:hover
      box-shadow 10px 8px 20px 0 rgba(0,0,0,.5)
    &:focus, &:active
      outline none
  p
    margin-top 30px
  .fade-enter-active, .fade-leave-active 
    transition opacity .2s ease
  // .fade-enter-active 
  //   transition-delay .2s
  // .fade-enter 
  //   transition-delay .2s
  .fade-enter, .fade-leave 
    opacity 0
</style>
