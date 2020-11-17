<template>

<div><label><input type="checkbox" :checked="!checkRemain" @change="allChecked"> Check All</label></div>

</template>


<script>
export default {
    name:'todo-check-all',
    computed:{
        checkRemain(){
            return this.$store.getters.checkRemain
        }
    },
    methods:{
    allChecked(){
        this.$store.dispatch('checkAll',event.target.checked)
         
    }    
    }

}
</script>