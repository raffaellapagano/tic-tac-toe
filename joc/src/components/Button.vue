<template>
    <div>
        <button class="btn" @click="marcarBoton(button.id); if(clickTimes<4){marcarPC()}">{{button.value}}</button>
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
        // marcar: function(val) {
        //     if(this.bottonValue.value === ""){
        //         this.bottonValue.value = val;
        //     }
            
        // },
        ...Vuex.mapMutations(['marcarBoton', 'marcarPC'])
    }
}


</script>

<style scoped>
button{
    width: 100px;
    height: 100px;
    background-color: rgb(243, 239, 239);
    border: slategray solid 1px;
}

button:hover{
    background: white;
}
</style>