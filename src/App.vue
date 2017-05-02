<template lang="pug">
  include ./assets/bemto/bemto
  #app
    header-nav
    transition(:name="transitionName" appear)
      router-view.child-view

</template>

<script>

import HeaderNav from '@/components/Nav'

export default {
  name: 'app',
  components: { HeaderNav },
  data () {
    return {
      transitionName: 'slide-right'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.meta.index
      const fromDepth = from.meta.index
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      console.log(toDepth, fromDepth, toDepth < fromDepth)
      console.log(this.transitionName)
    }
  }
}
</script>

<style lang="stylus">

@font-face 
    font-family Roboto-reg
    src url('./assets/fonts/Roboto-Regular.ttf')
@font-face 
    font-family Roboto-light
    src url('./assets/fonts/Roboto-Light.ttf')
@font-face 
    font-family Roboto-bold
    src url('./assets/fonts/Roboto-Bold.ttf')
@font-face 
    font-family Roboto-black
    src url('./assets/fonts/Roboto-Black.ttf')
@font-face 
    font-family Roboto-thin
    src url('./assets/fonts/Roboto-thin.ttf')
    
@import './assets/icomoon.css'
@import "./_vars.styl"

* 
  margin 0
  padding 0

#app 
  font-family Roboto-reg
  color #2c3e50


html
    font-size 14px

*
    margin 0
    padding 0
    box-sizing border-box
    -webkit-backface-visibility hidden
    

body
    font-size 1em
    font-family $reg
    background-color #fff
    
.wrapper 
    width 100% 
    position relative
    
.container-fluid
    width 100%
    
.container
    width 1180px
    margin 0 auto
    padding 0 15px
    
.clearfix:before,.clearfix:after
    content ""
    display table
    width 0
    height 0
    visibility hidden
    
.clearfix:after
    clear both
    
.content 
  margin-top 118px
    
-webkit-input-placeholder
    font-family $font
    font-size 14px
-moz-placeholder
   font-family $font
   font-size 14px
   
-moz-placeholder
   font-family $font
   font-size 14px

-ms-input-placeholder
   font-family $font
   font-size 14px

-webkit-inner-spin-butto
    display none
    -webkit-appearance none
-ms-expand
    display none
    
textarea,
input[type="text"],
input[type="button"],
input[type="submit"], select
     -webkit-appearance none
     border-radius 0
.select2
    spanfocu
        outline none


a, img, div, input, select
    &:active, &:focus
        outline none
    
@media(max-width 1199px)
    .container
        width 940px

@media(max-width 960px) 
    .container
        width 700px

@media(max-width 720px) 
    .container
        width 460px
        
@media(max-width 480px) 
    .container
        width 300px
        padding 0 5px

    

    


.fade-enter-active 
  transition-delay .25s

.fade-enter-active, .fade-leave-active 
  transition-property opacity
  transition-duration 1s


.fade-enter, .fade-leave-active 
  opacity 0


.child-view 
  left 0
  right 0
  position absolute
  transition all .5s cubic-bezier(.55,0,.1,1)

.slide-left-enter, .slide-right-leave-active 
  opacity 0
  -webkit-transform translate(30px, 0)
  transform translate(30px, 0)

.slide-left-leave-active, .slide-right-enter 
  opacity 0
  -webkit-transform translate(-30px, 0)
  transform translate(-30px, 0)

</style>
