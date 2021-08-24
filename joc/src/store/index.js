import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clickTimes: -1,
    arrayButton: [
      {
        id: 1,
        value: ""
      },
      {
        id: 2,
        value: ""
      },
      {
        id: 3,
        value: ""
      },
      {
        id: 4,
        value: ""
      },
      {
        id: 5,
        value: ""
      },
      {
        id: 6,
        value: ""
      },
      {
        id: 7,
        value: ""
      },
      {
        id: 8,
        value: ""
      },
      {
        id: 9,
        value: ""
      }
    ]
  },
  mutations: {
    marcarPC(state){
      let id = -1
      let valor = "O";
      let verify = false;
      if(state.arrayButton[4].value === ""){
        state.arrayButton[4].value = valor;
      }else{
      do {
        id = getRandomArbitrary(1, 9);
        switch (id-1) {
          case 1:
            if(state.arrayButton[id].value === ""){
            state.arrayButton[id].value = valor;
            verify = true;
            }
            break;
          case 2:
            if(state.arrayButton[id].value === ""){
              state.arrayButton[id].value = valor;
              verify = true;
            }
            break;
          case 3:
            if(state.arrayButton[id].value === ""){
              state.arrayButton[id].value = valor;
              verify = true;
            }
            break;
          case 4:
            if(state.arrayButton[id].value === ""){
            state.arrayButton[id].value = valor;
            verify = true;
            }
            break;
          case 5:
            if(state.arrayButton[id].value === ""){
              state.arrayButton[id].value = valor;
              verify = true;
              }
            break;
          case 6:
            if(state.arrayButton[id].value === ""){
              state.arrayButton[id].value = valor;
              verify = true;
              }
            break;
          case 7:
            if(state.arrayButton[id].value === ""){
              state.arrayButton[id].value = valor;
              verify = true;
              }
            break;
          case 8:
            if(state.arrayButton[id].value === ""){
              state.arrayButton[id].value = valor;
              verify = true;
              }
            break;
          case 9:
            if(state.arrayButton[id].value === ""){
              state.arrayButton[id].value = valor;
              verify = true;
              }
            break;
          default:
            break;
        }
      } while (verify == false);
    }
    },
    marcarBoton(state, id){
      let valor = "X"
        switch (id) {
          case 1:
            state.arrayButton[id-1].value = valor;
            break;
          case 2:
            state.arrayButton[id-1].value = valor;
            break;
          case 3:
            state.arrayButton[id-1].value = valor;
            break;
          case 4:
            state.arrayButton[id-1].value = valor;
            break;
          case 5:
            state.arrayButton[id-1].value = valor;
            break;
          case 6:
            state.arrayButton[id-1].value = valor;
            break;
          case 7:
            state.arrayButton[id-1].value = valor;
            break;
          case 8:
            state.arrayButton[id-1].value = valor;
            break;
          case 9:
            state.arrayButton[id-1].value = valor;
            break;
          default:
            break;
        }  
      state.clickTimes++;
    }
  },
  actions: {
  },
  modules: {
  },
  created:{

  }
});

// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
