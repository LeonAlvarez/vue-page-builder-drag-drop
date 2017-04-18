<template>
    <div>
    estoy en {{msg}}
        <ul v-sortable>
        <li> aa<fila ></fila>         </li>
        <li> bb<fila ></fila>         </li>
        </ul>
    </div>
</template>

<script>
window.vSortable
import Fila from './Fila.vue'
export default {
  name: 'Principal',
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
