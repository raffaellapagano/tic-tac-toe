<template>
  <div class="home">
    <div class="d-flex flex-row justify-content-center flex-wrap tablero">
      <Button v-for="button in arrayButton" :key="button.id" :button="button"></Button>
    </div>

    <div class="p-3">
      <button class="btn btn-primary" @click="restart()">Restart</button>
      <hr>
    </div>

    <div>
      <p>Gamer X: {{gameWinX}}</p>
      <p>Gamer O: {{gameWinO}}</p>
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
  computed: {
    ...Vuex.mapState(['arrayButton', 'gameOver', 'gameWinX', 'gameWinO'])
  },
  methods: {
    marcar: function(val) {
            if(this.bottonValue.value === ""){
                this.bottonValue.value = val;
            }
            
        },
    ...Vuex.mapMutations(['marcarPC', 'restart', 'checkWinner'])
  }
}
</script>

<style scoped>
.tablero{
  width: 300px;
  margin: auto;
}
</style>
