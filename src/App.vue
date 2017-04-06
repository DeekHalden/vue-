<template>
  <div id="app" class="container">
    <navi class="container"></navi>
    <img src="./assets/logo.png">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>

import VueAwesomeSwiper from 'vue-awesome-swiper'
import Navi from '@/components/Nav'

export default {
  name: 'app',
  components: { Navi, VueAwesomeSwiper },
  data () {
    return {
      transitionName: 'slide-right'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/')[1].length
      const fromDepth = from.path.split('/')[1].length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      console.log(toDepth, fromDepth, toDepth < fromDepth)
      console.log(this.transitionName)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  width: 1180px;
  margin: 0 auto;
}

@media(max-width:1200px) {
    .container {
        width: 940px;
      
    }
  
}

@media(max-width:960px)  {
    .container {
      width: 700px;
      
    }

}

@media(max-width:720px)  {
    .container {
      width: 460px;
      
    }

}

@media(max-width:480px)  {
    .container {
      width: 300px;
    }
}

.fade-enter-active {
  transition-delay: .25s;
}
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: 1s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

.child-view {
  left: 0;
  right: 0;
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
