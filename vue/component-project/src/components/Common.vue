<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div></div>
</template>
<script>
export default{
    components : [], //속성,옵션
    data(){
        return{
            today : new Date()
        }
    },
    computed : {
        AfterYear(){
            return this.today.setFullYear(this.today.getFullyear()+1);
        }
    },
    methods : {},
    watch : {},
    created(){},
    mounted(){}
}
</script>
<style scoped>
</style>
