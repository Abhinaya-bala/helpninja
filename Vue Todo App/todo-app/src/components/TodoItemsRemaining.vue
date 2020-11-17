<template>

<div>{{ remain }} items left</div>

</template>


<script>
export default {
    name:'todo-remaining',
    props:{
        remain:{
            type:Number,
            required:true,
        }
    }
}
</script>