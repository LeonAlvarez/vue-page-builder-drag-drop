<template>
    <div>
    estoy en {{msg}}
      
    </div>
</template>

<script>
import Fila from './Fila.vue'
export default {
  name: 'principal',
  data () {
    return {
      msg: 'Titulo Principal'
    }
  },
  components: {
    Fila
  }
}
</script>


<style>
</style>
