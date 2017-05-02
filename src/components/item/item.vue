
<script>
  export default {
    data () {
      return {
      }
    },
    props: ['currency'],
    computed: {
      checkPurchase () {
        this.activeClass = this.currency.is_increase.purchase[0] === 1 ? true : this.currency.is_increase.purchase[0] === -1 ? false : 'normal'
        return this.activeClass
      },
      checkSale () {
        this.activeClass = this.currency.is_increase.sale[0] === 1 ? true : this.currency.is_increase.sale[0] === -1 ? false : 'normal'
        return this.activeClass
      }
    },
    mounted () {
    }
  }
</script>

<template lang="pug">
  include ../../assets/bemto/bemto
  div.item().clearfix
    +b.SPAN.block.block--logo
      img(src="./../../assets/images/exchange.png")
    +b.SPAN.block.block--currency {{ currency.currency_name}}
    +b.SPAN.block.block--buy.clearfix 
      +e.SPAN.price {{ currency.purchase_rate}}
      +e.SPAN.delta(:class="{'block__delta--up': checkPurchase === true, 'block__delta--down': checkPurchase === false, 'block__delta--normal': checkPurchase === 'normal'}") {{ currency.is_increase.purchase[1]}}
      
    +b.SPAN.block.block--sell.clearfix 
      +e.SPAN.price {{ currency.sale_rate}}
      +e.SPAN.delta(:class="{'block__delta--up': checkSale === true, 'block__delta--down': checkSale === false, 'block__delta--normal': checkSale === 'normal'}") {{ currency.is_increase.sale[1]}}
    +b.A().block.block--reserve БРОНЬ ВАЛЮТЫ
</template>
<style lang="stylus">
@import './../../_vars'
.item
  padding 26px 0
  border-bottom 1px solid #f4924f
  background-color #f17d2f
  &:first-child
    border-top-left-radius 7px
    border-top-right-radius 7px 
  &:last-child
    border-bottom-left-radius 7px
    border-bottom-right-radius 7px 
  &:hover
    background-color #dc6d22
  .block
    display inline-block
    color #fff
    font-family $black
    &--logo
      margin 0 21px
      img
        display block
    &--currency
      width 15%
      font-size 1.9em    
    &--buy
      margin-left 45px
      border-right 1px solid #f4924f
      padding 0  35px
    &--sell
      padding 0 35px
    &--buy, &--sell
      width 25%
      
      font-size 2em
      .block__price
        display inline-block
        float left
        text-align right
      .block__delta          
        display inline-block
        float right              
        vertical-align middle
        padding-left 25px
        font-size .5em
        font-family $thin
        position relative
        margin 10px 0 0 12px
        text-align center
        width 57px
        &:before
          position absolute
          padding 1px
          width 20px
          height 20px
          top -3px
          left -0px
          border-radius 50%
          text-align center
        &--up
          &:before
            line-height 20px
            content '\02C4'
            background-color $add
        &--down
          &:before
            line-height 22px
            content '\02C5'
            background-color #0ab11d
    &--reserve
      background #fff
      border-radius 7px
      padding 0 18px
      color $main
      font-size 1em
      font-family $black
      display inline-block
      height 46px
      font-size .9em
      vertical-align middle
      line-height 46px
      float right
      cursor pointer
      transition .2s ease
      margin -5px 20px 0 0
      &:hover
        color #fff
        background-color $add
</style>
