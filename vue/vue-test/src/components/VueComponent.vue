<template>
    <div>
        <label><input type="text" v-model="msg"></label>
        <p>{{msg}}</p>
    </div>
</template>

<script>
export default {
    name : 'VueComponent',
    data(){
        return{
            msg:'Hmm..'
        }
    }
}
</script>
<style>
    p{
        background-color: rgb(15, 237, 119);
    }
</style>