import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clickTimes: -1,
    gameOver: false,
    gameWinX: 0,
    gameWinO: 0,
    arrayButton: [
      {
        id: 1,
        value: "",
        color:"bg-light"
      },
      {
        id: 2,
        value: "",
        color:"bg-light"
      },
      {
        id: 3,
        value: "",
        color:"bg-light"
      },
      {
        id: 4,
        value: "",
        color:"bg-light"
      },
      {
        id: 5,
        value: "",
        color:"bg-light"
      },
      {
        id: 6,
        value: "",
        color:"bg-light"
      },
      {
        id: 7,
        value: "",
        color:"bg-light"
      },
      {
        id: 8,
        value: "",
        color:"bg-light"
      },
      {
        id: 9,
        value: "",
        color:"bg-light"
      }
    ]
  },
  mutations: {
    marcarPC(state){
      let id = -1
      let valor = "O";
      let verify = false;
      if(state.arrayButton[4].value === ""){
        setTimeout(function() { state.arrayButton[4].value = valor;}, 500);
      }else{
      do {
        id = getRandomArbitrary(1, 9);
        switch (id-1) {
          case 1:
            if(state.arrayButton[id].value === ""){
            setTimeout(function() { state.arrayButton[id].value = valor;}, 500);
            verify = true;
            }
            break;
          case 2:
            if(state.arrayButton[id].value === ""){
              setTimeout(function() { state.arrayButton[id].value = valor;}, 500);
              verify = true;
            }
            break;
          case 3:
            if(state.arrayButton[id].value === ""){
              setTimeout(function() { state.arrayButton[id].value = valor;}, 500);
              verify = true;
            }
            break;
          case 4:
            if(state.arrayButton[id].value === ""){
              setTimeout(function() { state.arrayButton[id].value = valor;}, 500);
              verify = true;
            }
            break;
          case 5:
            if(state.arrayButton[id].value === ""){
              setTimeout(function() { state.arrayButton[id].value = valor;}, 500);
              verify = true;
            }
            break;
          case 6:
            if(state.arrayButton[id].value === ""){
              setTimeout(function() { state.arrayButton[id].value = valor;}, 500);
              verify = true;
            }
            break;
          case 7:
            if(state.arrayButton[id].value === ""){
              setTimeout(function() { state.arrayButton[id].value = valor;}, 500);
              verify = true;
            }
            break;
          case 8:
            if(state.arrayButton[id].value === ""){
              setTimeout(function() { state.arrayButton[id].value = valor;}, 500);
              verify = true;
            }
            break;
          case 9:
            if(state.arrayButton[id].value === ""){
              setTimeout(function() { state.arrayButton[id].value = valor;}, 500);
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
    },
    checkWinner(state){
      if(state.arrayButton[0].value === state.arrayButton[1].value && state.arrayButton[0].value === state.arrayButton[2].value 
        && state.arrayButton[0].value!=""){
        state.arrayButton[0].color = "bg-warning";
        state.arrayButton[1].color = "bg-warning";
        state.arrayButton[2].color = "bg-warning";
        setTimeout(function() { 
          alert("Win " + state.arrayButton[0].value);
          state.gameOver=true; 
          if(state.arrayButton[0].value==="X"){
            state.gameWinX++;
          }else{
            state.gameWinO++;
          }
        }, 100);
      }else if(state.arrayButton[3].value === state.arrayButton[4].value && state.arrayButton[5].value === state.arrayButton[4].value && state.arrayButton[3].value!=""){
        state.arrayButton[3].color = "bg-warning";
        state.arrayButton[4].color = "bg-warning";
        state.arrayButton[5].color = "bg-warning";
        setTimeout(function() { 
          alert("Win " + state.arrayButton[3].value);
          state.gameOver=true; 
          if(state.arrayButton[3].value==="X"){
            state.gameWinX++;
          }else{
            state.gameWinO++;
          }
        }, 100);
      }else if(state.arrayButton[6].value === state.arrayButton[7].value && state.arrayButton[7].value === state.arrayButton[8].value && state.arrayButton[8].value!=""){
        state.arrayButton[6].color = "bg-warning";
        state.arrayButton[7].color = "bg-warning";
        state.arrayButton[8].color = "bg-warning";
        setTimeout(function() { 
          alert("Win " + state.arrayButton[6].value);
          state.gameOver=true; 
          if(state.arrayButton[6].value==="X"){
            state.gameWinX++;
          }else{
            state.gameWinO++;
          }
        }, 100);
      }else if(state.arrayButton[0].value === state.arrayButton[3].value && state.arrayButton[6].value === state.arrayButton[3].value && state.arrayButton[3].value!=""){
        state.arrayButton[0].color = "bg-warning";
        state.arrayButton[3].color = "bg-warning";
        state.arrayButton[6].color = "bg-warning";
        setTimeout(function() { 
          alert("Win " + state.arrayButton[0].value);
          state.gameOver=true; 
          if(state.arrayButton[0].value==="X"){
            state.gameWinX++;
          }else{
            state.gameWinO++;
          }
        }, 100);
      }else if(state.arrayButton[1].value === state.arrayButton[4].value && state.arrayButton[4].value === state.arrayButton[7].value && state.arrayButton[7].value!=""){
        state.arrayButton[1].color = "bg-warning";
        state.arrayButton[4].color = "bg-warning";
        state.arrayButton[7].color = "bg-warning";
        setTimeout(function() { 
          alert("Win " + state.arrayButton[1].value);
          state.gameOver=true; 
          if(state.arrayButton[1].value==="X"){
            state.gameWinX++;
          }else{
            state.gameWinO++;
          }
        }, 100);
      }else if(state.arrayButton[2].value === state.arrayButton[5].value && state.arrayButton[5].value === state.arrayButton[8].value && state.arrayButton[8].value!=""){
        state.arrayButton[2].color = "bg-warning";
        state.arrayButton[5].color = "bg-warning";
        state.arrayButton[8].color = "bg-warning";
        setTimeout(function() { 
          alert("Win " + state.arrayButton[2].value);
          state.gameOver=true; 
          if(state.arrayButton[2].value==="X"){
            state.gameWinX++;
          }else{
            state.gameWinO++;
          }
        }, 100);
      }else if(state.arrayButton[0].value === state.arrayButton[4].value && state.arrayButton[4].value === state.arrayButton[8].value && state.arrayButton[8].value!=""){
        state.arrayButton[0].color = "bg-warning";
        state.arrayButton[4].color = "bg-warning";
        state.arrayButton[8].color = "bg-warning";
        setTimeout(function() { 
          alert("Win " + state.arrayButton[0].value);
          state.gameOver=true; 
          if(state.arrayButton[0].value==="X"){
            state.gameWinX++;
          }else{
            state.gameWinO++;
          }
        }, 100);
      }else if(state.arrayButton[2].value === state.arrayButton[4].value && state.arrayButton[4].value === state.arrayButton[6].value && state.arrayButton[6].value!=""){
        state.arrayButton[2].color = "bg-warning";
        state.arrayButton[4].color = "bg-warning";
        state.arrayButton[6].color = "bg-warning";
        setTimeout(function() { 
          alert("Win " + state.arrayButton[2].value);
          state.gameOver=true; 
          if(state.arrayButton[2].value==="X"){
            state.gameWinX++;
          }else{
            state.gameWinO++;
          }
        }, 100);
      }
    },
    restart(state){
      for (let i = 0; i < state.arrayButton.length; i++) {
        state.arrayButton[i].value="";
        state.arrayButton[i].color="bg-light";
        state.clickTimes= -1;
      }
    }
  },
  actions: {
  },
  modules: {
  }
});

// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
