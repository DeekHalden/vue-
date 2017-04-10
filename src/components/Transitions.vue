<template lang="pug">
  div
    transition(name="fade" mode="out-in")
      button(@click="show = !show") {{ show ? 'SWITCH' : 'greet'}}
    transition(name="fade" mode="out-in")
      p(v-if="show" key="show") yo, peace, c`mon
      p(v-else key="hide") Sry, nothing left to say
    div.block(v-for="box in boxes")
      button(@click="mytoggle(box.index)") block {{box.index}}
      transition(name="fade" mode="out-in" tag="div")
        div.box-wrapper(:class="{ 'box-wrapper--active': box.isActive}")
          p i am box number {{ box.index }}
          p i am box number {{ box.index }}
          div {{ box.index }}
    hr
    pre {{ boxes }}
    hr
    pre {{ boxes }}
    hr
    pre {{ boxes }}

</template>
<script>
  export default {
    data () {
      return {
        show: true,
        boxes: [
          {
            isActive: false,
            index: 0
          },
          {
            isActive: false,
            index: 1
          },
          {
            isActive: false,
            index: 2
          }
        ]
      }
    },
    methods: {
      mytoggle: function (n) {
        console.log(n)
        for (var i = 0; i < 3; i++) { // close all boxes
          this.boxes[i].show = false
        }
        this.boxes[n].show = !this.boxes[n].show // open the corresponding box
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
    transition all .2s ease
  // .fade-enter-active 
  //   transition-delay .2s
  // .fade-enter 
  //   transition-delay .2s
  .fade-enter, .fade-leave 
    opacity 0
</style>
