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
<style scoped> /*scoped쓰면 자신한테만 적용 */
    p{
        background-color: rgb(15, 237, 119);
    }
</style>