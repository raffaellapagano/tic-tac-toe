<template>
    <div>
        <button id="" class="btn" :class="button.color" @click="marcarBoton(button.id); if(clickTimes<4){marcarPC()}; checkWinner()">{{button.value}}</button>
    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    props: {
        button: Object
    },
    computed:{
        ...Vuex.mapState(['arrayButton', 'clickTimes'])
    },
    methods: {
        ...Vuex.mapMutations(['marcarBoton', 'marcarPC', 'checkWinner'])
    }
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