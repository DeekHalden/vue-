<template lang="pug">
  include ../../assets/bemto/bemto
  .addresses-row.clearfix
    +b.address-card.clearfix(v-for="address in location.addresses")
      +e.H2.title {{ address.address }} 
      +b.contact-info.clearfix
          +e.SPAN.el(v-for="contact in location.phones") {{ contact.number }}

      +e.H2.time {{ address.schedule }}
      +e.icon
        .icon-map
        p на карте
      .map-container
        gmap-map(:center="address.position", :zoom="7" style="width: 500px; height: 300px")
          gmap-marker(:key="index", :position="address.position", :clickable="true", :draggable="true" @click="center=m.position")
    
</template>
  
<script>

export default {
  data () {
    return {
    }
  },
  props: ['location']
}
</script>

<style lang="stylus">
  @import "../../_vars.styl"
  .addresses-row
    margin-top 41px
  .address-card
    background-color #dfdfdf
    padding 67px 81px
    width 48%
    float left
    margin-right 4%
    margin-bottom 4%
    &:nth-child(2n)
      margin-right 0
    &__title
      font-size 18px
      padding-left 30px
      text-transform uppercase
      background transparent url('./../../assets/images/pin.png') no-repeat  left center
      background-size contain
    .contact-info
      margin 26px 0
      width 91%
      float left
      &__el
        margin-bottom 5px
        width 50%
        font-size 13px
        font-family $reg
        float left
        &:nth-child(2n + 1)
          width 40%
    &__time
      font-size 1em
      width 80%
      float left
    &__icon
      cursor pointer
      margin-top -45px
      display block
      float right
      &:hover
        p
          transition .2s ease
          color $add
        .icon-map
          transition .2s ease
          color #fff
      .icon-map
        color $add
        font-size 48px
@media(max-width 1199px)
  .address-card
    padding 20px 
@media(max-width 960px)
  .address-card
    width 320px
    &__title
      font-size 12px
    .contact-info
      width 100%
      &__el
        font-size 10px
    &__time
      font-size 10px
    &__icon
      margin-top -63px
    
@media(max-width 720px)
  .addresses-row
    margin-top 20px
  .address-card
    width 100%
    margin 0 auto 4% !important
    float none
      

</style>

