<template lang="pug">
div
  script2(src="./static/dragster.js")
  script2(src="./static/dragconfig.js")
  link(href="./static/dragula.min.css")
  script2(src="./static/d1be1b32e6.js")
  div#left-lovehandles.container
    newrow
    newrow
  addrow
</template>

<script>
import Newrow from '@/components/Newrow'
import Addrow from '@/components/Addrow'
export default {
  name: 'builder',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {Addrow, Newrow}
}
</script>

<style lang='scss'>
.container{min-height:40vh; background:red}
</style>
