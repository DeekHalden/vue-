<template lang="pug">
  include ../../assets/bemto/bemto
  .container-fluid.city-details-wrapper
    +b.city-details.container
      +e.H2.title мы вас ждем по адресу г.{{ city.name }}
      addresses-row(:location="city")
</template>

<script>
  import AddressesRow from './CityAddress'
  export default {
    data () {
      return {
      }
    },
    components: { AddressesRow },
    methods: {
    },
    props: ['city']
  }
</script>

<style lang="stylus">
  @import "../../_vars.styl"
  .city-details-wrapper
    border-top 6px solid $add
  .city-details
    padding-top 54px
    &__title
      font-family $bold
      font-size 22px
      text-align center
      text-transform uppercase
  @media(max-width 720px)
    .city-details
      padding-top 20px
      &__title
        font-size 14px
    
        
</style>
