<template lang="pug">
  div
    h3 {{ title }}
    input(v-model="item.title" placeholder="Note title").input
    input(v-model="item.desc" placeholder="Note description").input 
    input(v-model="item.rank" type="number" placeholder="Note rank").input 
    button(@click="addItem") Add note
    div.note-container
      .note(v-for="(note, index) in notes", :class="{ 'note--top-ranked' : note.rank > 5 ,'note--low-ranked': note.rank < 5,'note--middle-ranked': note.rank == 5 }")
        span(@click="removeItem(index)") &times; 
        p.note__title {{ note.title }}
        p.note__date {{ note.timestamp}}
        p.note__desc {{ note.desc }}
        input(type="number" @keydown.enter="changeRank(index)" v-bind:note="note" v-model="note.rank")
        p.note__rank {{ note.rank }}

    

    
</template>
<script>
  import VueLocalStorage from 'vue-localstorage'
  export default {
    components: { VueLocalStorage },
    data () {
      return {
        title: 'Notemaster',
        item: {
          title: '',
          desc: '',
          timestamp: '',
          rank: 0
        },
        notes: [
        ],
        newRank: 0,
        newRankOfItem: 0
      }
    },
    mounted () {
      this.notes = JSON.parse(localStorage.getItem('notes'))
    },
    methods: {
      addItem () {
        if (this.item.title.trim() === '' || this.item.desc.trim() === '') return false
        this.item.timestamp = new Date().toLocaleString()
        this.notes.push({
          title: this.item.title,
          desc: this.item.desc,
          timestamp: this.item.timestamp,
          rank: this.item.rank,
          newRank: 0
        })
        localStorage.setItem('notes', JSON.stringify(this.notes))
        this.item.title = ''
        this.item.desc = ''
        this.item.rank = 0
      },
      removeItem (index) {
        this.notes.splice(index, 1)
        localStorage.setItem('notes', JSON.stringify(this.notes))
      },
      changeRank (index) {
        this.notes[index].rank = this.notes[index].rank
        localStorage.setItem('notes', JSON.stringify(this.notes))
      }
    }
  }
</script>
<style scoped lang="stylus">
  .note-container
    margin-top 40px
    display flex
    flex-wrap wrap
    justify-content space-between
  .note
    width 20%
    margin 10px auto
    border 1px solid #313233
    border-radius 5px
    padding 20px
    position relative
    &--top-ranked
      background-color rgba( 0, 255, 0 , .1)
    &--low-ranked
      background-color rgba( 0, 0, 0 , .1)
    &--middle-ranked
      background-color rgba( 255, 126, 0 , .1)
      
    &__title, &__desc
      font-size 20px
      color #666
    &__date
      font-size 14px
    span 
      position absolute
      top 10px
      right 10px
      cursor pointer
      transition .2s ease
      &:hover
        font-size 20px
        color #000
      
  .input
    display block
    border 1px solid #666
    border-radius 7px
    height 28px
    margin 10px auto
    padding 0 5px
    &:active, &:focus
      outline none
       
</style>
