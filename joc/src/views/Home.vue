<template>
  <div class="home">
    <div class="d-flex flex-row justify-content-center flex-wrap tablero">
      <Button v-for="button in arrayButton" :key="button.id" :button="button"></Button>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue"
import Vuex from 'vuex'

export default {
  name: 'Home',
  components: {
    Button
  },
  computed:{
    ...Vuex.mapState(['arrayButton'])
  },
  methods: {
    marcar: function(val) {
            if(this.bottonValue.value === ""){
                this.bottonValue.value = val;
            }
            
        },
    ...Vuex.mapMutations(['marcarPC'])
  }
}
</script>

<style scoped>
.tablero{
  width: 300px;
  margin: auto;
}
</style>
