<template lang="pug">
.row()
  .options.options-top
    .options__item.styles 
      i.fa.fa-paint-brush
    .options__item.move
      i.fa.fa-arrows.handle
    .options__item.column 
      i.fa.fa-columns
  h1 {{msg}}
</template>

<script>
export default {
  name: 'newrow',
  data () {
    return {
      msg: Math.random(1000)
    }
  }
}
</script>

<style lang='scss'>
// ---------------------------------------
// Variables
// ---------------------------------------

$row-vertical-padding:0.5rem; 

// ----- Variables

body {
  padding:1rem;
}
.row {
  border: 1px dashed black;
  border-radius:10px;
  background-color: #f0f0f0;
  position:relative;
  min-height:3rem;
  overflow:hidden;
  padding-left:$row-vertical-padding;
  padding-right:$row-vertical-padding;
  .options{
    position: absolute;
    transition: all .5s;
    &-top{
      top: -5rem;
      left: -5rem;
    }
    &__item{
      width: 20px;
      height: 20px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border:1px solid black;
      border-radius:50%;
    }
    .move {
      cursor:all-scroll;
    }
  }
  &:hover .options-top{
    top: 0.5rem;
    left: 0.5rem;
  }
}
</style>
