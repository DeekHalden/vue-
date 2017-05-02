<template lang="pug">
  include ../../assets/bemto/bemto
  .city-details.container-fluid
    .container-fluid.table-wrapper
      div.container.content.clearfix
        +b.index-table(v-if="currencies")
          +b.table-head
            +e.SPAN.title Валюта
            +e.SPAN.title покупка
            +e.SPAN.title продажа
          +b.table-body()
            item(v-for="(currency, index) in currencies", :key="index", :currency="currency" v-if="index < 5")
            transition-group(name="fade" mode="out-in")
              item(v-for="(currency, index) in currencies", :key="index", :currency="currency" v-if="index >= 5  && show === true")
        +b.div(v-else) {{ msg }} 
      a(@click="show=!show" v-if="slicedArray > 5").list-toggle {{ buttonText }}
    city-details(:city="city")

    

      
    
</template>

<script>
import { mapGetters } from 'vuex'
import CityDetails from './CityDetails'
import Item from './item'
export default {
  name: 'hello',
  components: { Item, CityDetails },
  computed: {
    ...mapGetters([
      'selectedCity'
    ]),
    slicedArray () {
      console.log(this.currenciesArray.length)
      return this.currenciesArray.length
    },
    buttonText () {
      let text = this.show ? 'Скрыть' : 'Другие валюты'
      return text
    }
  },
  asyncComputed: {
    currencies: {
      get () {
        let city = this.selectedCity
        return this.$http.get('http://localhost:3002/cities').then(response => {
          this.city = response.body[city]
          this.currenciesArray = response.body[city].currencies
          return this.currenciesArray
        }, response => {
          this.msg = 'no data'
        })
      }
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      currenciesArray: [],
      city: '',
      show: false
    }
  },
  props: [''],
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

@import "../../_vars.styl"
.fade-enter-active 
  transition-delay .25s

.fade-enter-active, .fade-leave-active 
  transition all 0.2s
  max-height 230px

.fade-enter, .fade-leave-active 
  opacity 0

.table-wrapper
  background url('./../../assets/images/table_bg.png') no-repeat center 
  background-size cover
  background-attachment fixed
  
  .index-table
    margin-bottom 33px
    background-color #b35b20
    border-radius 7px 
    width calc(100% - 289px)
    float left
    .table-head
      &__title
        display inline-block
        color #fff
        font-family $light
        font-size .9em
        margin-top 19px 
        margin-bottom 19px 
        &:first-child
            margin-left 65px
        &:nth-child(2)
            margin-left 210px
        &:nth-child(3)
            margin-left 125px
.list-toggle
  display block
  background url('./../../assets/images/button.png') no-repeat center
  font-size 1.1em
  font-family $bold
  cursor pointer
  
  text-transform uppercase
  color #fff
  text-align center
  width 309px
  height 46px
  line-height 46px               
  margin 0 auto 
  &:hover
    color black
</style>
