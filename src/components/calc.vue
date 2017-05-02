<template lang="pug">
include ../assets/bemto/bemto
+b.calculator
  +e.close(@click="emit") &times;
  +b.H2.title Калькулятор
  +b.form-control
    +e.LABEL Я хочу
    +e.toggle Продать <span></span> Купить


</template>

<script>
  import { EventBus } from './eventbus.js'
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    data () {
      return {}
    },
    methods: {
      ...mapMutations([
        'showCalc'
      ]),
      emit () {
        EventBus.$emit('close')
      }
    },
    props: ['close'],
    computed: {
      ...mapGetters([
        'selectedCity'
      ])
    },
    asyncComputed: {
      currencies: {
        get () {
          let city = this.selectedCity
          return this.$http.get('http://localhost:3002/cities').then(response => {
            return response.body[city].currencies
          }, response => {
            this.msg = 'no data'
          })
        }
      }
    }
  }
</script>

<style lang="stylus">
  @import './../_vars.styl'
  .calculator
    width 300px
    border-radius 7px 
    background-color #fff
    height 487px
    position absolute
    top 50% 
    left 50% 
    transform translate(-50%)
    padding 30px 43px
    font-family $bold
    &__close
      position absolute
      right 0px
      top 0px
      width 40px
      font-size 20px
      height 40px
      text-align center
      line-height 40px
      cursor pointer
      color $main
      &:hover
        color $add
    .title
      color #3a3a3c
      font-size 2em
</style>
