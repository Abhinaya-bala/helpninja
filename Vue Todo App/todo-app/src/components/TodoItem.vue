<template>
    <div class="todo-item">
     <div class="todo-item-left">
         <input type="checkbox" v-model="completed" @change="doneEdit">
         <div  v-if="!edit" @dblclick="editTodo" 
            class="todo-item-label" :class="{completed:completed}">{{title}}</div>
       
            <input v-else class="todo-item-edit" type="text" v-model="title" @keyup.enter="doneEdit" v-focus  @keyup.esc="cancelEdit">
     </div>
       <div class="remove-item" @click="removeTodo(index)">
        &times;
        </div>
    </div>
</template>

<script>
export default {
    nmae:'todo-item',
    props:{
        todo:{
                type:Object,
                required:true,
        },
        
        checkAll:{
            type:Boolean,
            required:true,
        }

    },
    data(){
        return{
            'id':this.todo.id,
            'title':this.todo.title,
            'completed':this.todo.completed,
            'edit':this.edit,
            'beforeEditCache':'',
        }
    },
    watch:{
        checkAll(){
        this.completed=this.checkAll ? true : this.todo.completed
        }
    },
    directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
    methods:{
        removeTodo(id){
            eventBus.$emit('removeTodo',id)
        },
         editTodo(){
            this.beforeEditCache=this.title
            this.edit=true
          },
           doneEdit(){
             if(this.title.trim()=='')
             {
        this.title=this.beforeEditCache;
          }
            this.edit=false;
            eventBus.$emit('compledtedEdit',{
                     'id':this.id,
                    'title':this.title,
                    'completed':this.completed,
                    'edit':this.edit,
            })
          },
          cancelEdit(){
           this.title=this.beforeEditCache
           this.edit=false
          },
    }
    
}
</script>

<style >

</style>