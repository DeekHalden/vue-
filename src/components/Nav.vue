<template lang="pug">
include ../assets/bemto/bemto
section.container-fluid.header#header
  +b.container.clearfix.header-wrapper
    +b.logo
      router-link(to="/")
        +e.IMG(src="../assets/images/logo.png").img
            
    .business-data.clearfix
      +b.block.block--time
        +e.SPAN.date {{ time }} | 
        +e.SPAN.time {{ date }}
        +e.SPAN.work-time Сегодня мы открыты с 9 до 17
            
            
      +b.block.block--phone
        +e.DIV.data +38(050)51 75 252
        +e.DIV.data +38(050)51 75 252
      +b.block.block--email
        +e.DIV.data mail: best_obmen@gmail.com
        +e.DIV.data skype: best_obmen

    +b.sm-visible-toggle
      a()
        +e.SPAN.toggle
        +e.SPAN.toggle
        +e.SPAN.toggle
  .container-fluid.navbar-container
    .container
      +b.information.information--info
        +b.H2.heading Курс валют на: 
          +e.SPAN.time {{ time }}
          +e.SPAN.date {{ date }} в 

        +b.filter
          +b.form-control
            +b.SELECT(v-model="selectedCity" @change="sendCity")
              +e.OPTION(v-for="(city, i) in cities", :value="i" selected="0") {{ city.name }}
        +b.navbar-wrapper.clearfix
          .nav
            +b.navbar(:class="{'navbar--active': showMenu}")
              +e.link.navbar__link--void(@click="toggleMenu") информация
              +e.ROUTER-LINK.link(to="info.html", :class="{'navbar__link--active': showMenu}" v-if="showMenu") Справочник валют
              +e.ROUTER-LINK.link(to="old.html", :class="{'navbar__link--active': showMenu}" v-if="showMenu") Прием ветхих денег
              +e.ROUTER-LINK.link(to="posts.html", :class="{'navbar__link--active': showMenu}" v-if="showMenu") Новости 
          +b.contacts
            +e.A.link(href="info.html") Контакты
          +b.calc
            +e.A(@click="toggleCalc").el 
              span.icon-calc 
              span КАЛЬКУЛЯТОР

          calc(v-if="showCalc")

</template>

<script>

import { EventBus } from './eventbus.js'
import calc from './calc'
import { mapMutations } from 'vuex'
export default {
  name: 'navi',
  components: { calc },
  events: {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      cities: [],
      time: '',
      date: '',
      showMenu: false,
      selectedCity: this.$cookie.get('selectedCity') || 0,
      showCalc: false
    }
  },
  computed: {

  },
  methods: {
    ...mapMutations([
      'setCity'
    ]),
    toggleCalc () {
      this.showCalc = !this.showCalc
    },
    sendCity () {
      this.$cookie.set('selectedCity', this.selectedCity) || 0
      this.setCity(this.selectedCity)
    },
    getCities () {
      this.$http.get('http://localhost:3002/cities').then(response => {
        this.cities = response.body
      }, response => {
        this.msg = 'no data'
      })
    },
    updateTime () {
      let d = new Date()

      let month = d.getMonth() + 1
      let day = d.getDate()

      this.date = (day < 10 ? '0' : '') + day + '.' + (month < 10 ? '0' : '') + month + '.' + d.getFullYear()

      let minutes = d.getMinutes()
      let hour = d.getHours()

      this.time = hour + ':' + (minutes < 10 ? '0' + minutes : minutes)
    },
    toggleMenu () {
      console.log(this.showMenu)
      this.showMenu = !this.showMenu
    }
  },
  mounted () {
    this.getCities()
    this.updateTime()
    let city = this.$cookie.get('selectedCity') || 0
    this.setCity(city)
    setInterval(() => {
      this.getCities()
      this.updateTime()
    }, 30000)
    EventBus.$on('close', () => {
      this.showCalc = !this.showCalc
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">

@import "../_vars.styl"

.header
    border-top 6px solid $main
    position fixed
    top 0
    z-index 999
    color $main
    background-color #fff
    box-sizing border-box
    border-bottom 1px solid #e5e5e5
    transition .2s ease height
    .logo
        margin-top 29px
        position relative   
        width 292px
        float left
        &:hover
            opacity .7
        &:before
            content ''
            position absolute
            top -35px
            height 6px 
            width 90%
            background-color $add
    .business-data
        margin-top 24px
        float right
        font-family $roboto
        text-align justify
        width 63.2%
        &:after
            content ''
            width 100%
            display inline-block
    .block
        vertical-align middle
        display inline-block
        font-size 1em
        &:first-of-type
            margin-left 0
            float left
        &:last-of-type
            margin-right 0
            float right
            // margin-top 5px
        &__data
            color $gray
            & + .block__data
                margin-top 8px
            &--styled
                text-transform uppercase
                color #999999
                
        &--time
            color $gray
            .block__date, .block__time
                font-size 1.6em
                font-family $bold
            .block__divider
                font-family $thin
            .block__work-time
                display block
                font-size .9em
                font-family $light
        &--phone 
              margin 0 13%
        &--email
              width 222px
          
    .navbar-container
        padding 16px 0
        background-color #3a3a3c
        .information
            text-align justify
            width 100%  
            vertical-align middle
            display inline-block
            .return 
                margin-right 190px
                line-height 46px
                display inline-block
                a 
                    display block
                    color $main
                    text-decoration none
                    font-size 1.2em
                    text-transform uppercase
                    font-family $bold
            .heading
                vertical-align middle
                display inline-block
                font-family $bold
                font-size 1.2em
                text-transform uppercase
                &__time, &__date
                    margin-left 5px
                    color #fff
            .filter
                
                display inline-block
                margin-left 10px
                .form-control
                    select
                        color $gray
                        height 46px
                        background #fff url('../assets/images/dropdown.png') no-repeat 92% center
                        border-radius 7px
                        padding 0 36px 0 16px
            .navbar-wrapper
                vertical-align top
                display inline-block
                float right
                text-align justify
                width 58.5%
                .nav
                  display inline-block
                  position relative
                  width 150px
                  margin-left 40px
                  height 46px
                  .navbar
                      vertical-align top
                      @extend .header .navbar-container .information .filter .form-control select
                      padding 0
                      display inline-block
                      background #3a3a3c url('../assets/images/dropdown--white.png') no-repeat 92% center
                      border 1px solid rgba(255,255,255,.31)
                      text-transform uppercase
                      color #fff
                      font-family $bold
                      font-size 1em
                      cursor pointer  
                      position absolute
                      top 0
                      &--active
                          height 135px
                          background #3a3a3c url('../assets/images/dropdown--white.png') no-repeat 92% 20px
                          
                      &__link
                          // margin 0 36px 0 16px
                          display block
                          line-height 45px
                          color #fff
                          text-decoration none
                          position absolute
                          &:nth-child(2)
                              top 30px
                          &:nth-child(3)
                              top 60px
                          &:nth-child(4)
                              top 90px
                          &--void
                              position relative
                              font-size 1em !important
                              margin 0 36px 0 16px !important
                              line-height 44px
                              z-index value
                              &:before
                                  position absolute
                                  content ''
                                  left -25px
                                  top 15px
                                  width 15px
                                  height 15px
                                  background #fff url('../assets/images/i.png') no-repeat center center
                                  background-size cover
                                  
                              &:hover
                                  color #fff !important
                          &--active
                              margin-left 16px
                              font-size .8em
                              &:hover
                                  color $main
                .contacts
                    
                    margin-left 46px
                    width 150px
                    line-height 46px
                    color #fff
                    background #3a3a3c 
                    @extend .header .navbar-container .information  .navbar-wrapper .nav .navbar
                    position static
                    &__link
                        width auto
                        padding 0 36px 0 16px
                        font-size 1em
                        &:before
                            position absolute
                            content ''
                            left -8px
                            top 12px
                            width 15px
                            height 20px
                            background #fff url('../assets/images/pin.png') no-repeat center center
                            background-size cover
                .calc
                    cursor pointer
                    float right
                    vertical-align middle
                    display inline-block
                    vertical-align top
                    // float right
                    position relative
                    &:before
                        position absolute
                        
                    a
                        padding 0 16px 0 16px
                        line-height 50px
                        height 46px
                        width 222px
                        display inline-block
                        border-radius 7px
                        text-align center
                        background $add 
                        text-decoration none
                        font-family $black 
                        font-size .9em
                        color #fff
                        transition .2s ease
                        span
                            display inline-block
                            // margin 0 10px
                            & + span 
                                margin-left 20px
                        &:hover
                            color $add
                            background-color #fff
                     
                            
                
                
                      
          
              
        
</style>

