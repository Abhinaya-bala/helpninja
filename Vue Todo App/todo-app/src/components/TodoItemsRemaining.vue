<template>

<div>{{ remain }} items left</div>

</template>


<script>
export default {
    name:'todo-remaining',
    computed:{
        remain(){
            return this.$store.getters.remain
        }
    }
   
}
</script>