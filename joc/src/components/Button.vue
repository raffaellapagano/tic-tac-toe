<template>
    <div>
        <button id="" class="btn" :class="button.color" 
        @click="
            if(!gameOver){
            marcarBoton(button.id); 
            checkWinner('X')
            };
            if(clickTimes<4 && !gameOver){
                marcarPC()
            };
            checkWinner('O')"
            >
        {{button.value}}
        </button>
    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    data(){
        return{
            gameOverAqui: true
        }
    },
    props: {
        button: Object
    },
    computed:{
        ...Vuex.mapState(['arrayButton', 'clickTimes', 'gameOver'])
    },
    methods: {
        ...Vuex.mapMutations(['marcarBoton', 'marcarPC', 'checkWinner']),
    }
    // updated(){
    //     this.checkWinner();
    // }
}


</script>

<style scoped>
button{
    width: 100px;
    height: 100px;
    background-color: rgb(243, 239, 239);
    border: slategray solid 1px;
    font-size: 30px;
}

button:hover{
    background: white;
}
</style>