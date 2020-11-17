<template>
  <div>
    Todo List Goes Here
    <input type="text" class="todo-input" placeholder="What needs to be done" v-model="newTodo" @keyup.enter="addTodo">
    <todo-item v-for="todo in todosFiltered"
     :key="todo.id" :todo="todo"
     :checkAll="!checkRemain">
     </todo-item>

     <div class="extra-container">
      <todo-check-all></todo-check-all>
      <todo-items-remaining></todo-items-remaining>
    </div>

    <div class="extra-container">
      <todo-filtered></todo-filtered>
<todo-clear-completed></todo-clear-completed>
     

    </div>
 </div>
</template>

<script>
import TodoItem from './TodoItem'
import TodoItemsRemaining from './TodoItemsRemaining'
import TodoCheckAll from './TodoCheckAll' 
import TodoFiltered from './TodoFiltered.vue'
import TodoClearCompleted from './TodoClearCompleted'

export default {
  name: 'todo-list',
  components:{
    TodoItem,
    TodoItemsRemaining,
    TodoCheckAll,
    TodoFiltered,
    TodoClearCompleted,
  },

  data(){
      return{
          newTodo:'',
          idForTodo:3,
         
      }
  },
  
  computed:{
  
  checkRemain() {
   return this.$store.getters.checkRemain
   },
  todosFiltered() {
      
      return this.$store.getters.todosFiltered
    },
    
  },
  
     methods:
    {
      addTodo(){
        //  console.log($event)
        if(this.newTodo.trim().length==0){
          return;
        }
        this.$store.dispatch('addTodo',{
          id:this.idForTodo,
            title:this.newTodo,
                 
          })

          this.newTodo=''
          this.idForTodo++
          },
          } 
  }
</script>

<style>
.completed {
    text-decoration: line-through;
    color:green;
  }
</style>
