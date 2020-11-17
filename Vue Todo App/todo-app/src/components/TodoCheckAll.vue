<template>

<div><label><input type="checkbox" :checked="!checkRemain" @change="allChecked"> Check All</label></div>

</template>


<script>
export default {
    name:'todo-check-all',
    props:{
        checkRemain:{
            type:Boolean,
            required:true,
        }
    },
    methods:{
    allChecked(){
       eventBus.$emit('checkAllChanged',this.checkRemain) 
    }    
    }

}
</script>