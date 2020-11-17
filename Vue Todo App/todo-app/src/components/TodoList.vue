<template>
  <div>
    
    <input type="text" class="todo-input" placeholder="What needs to be done" v-model="newTodo" @keyup.enter="addTodo">
    <todo-item v-for="todo in todosFiltered"
     :key="todo.id" :todo="todo"
     :checkAll="!checkRemain">
     </todo-item>

     <div class="extra-container">
      <todo-check-all :checkRemain="checkRemain"></todo-check-all>
      <todo-items-remaining :remain="remain"></todo-items-remaining>
    </div>

    <div class="extra-container">
      <todo-filtered></todo-filtered>
<todo-clear-completed :showClearCompletedButton="showClearCompletedButton"></todo-clear-completed>
     

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
          filter:'all',
          todos:[
              {
                  'id':1,
                  'title':'Finish Vue Todo',
                  'completed':false,
                  'edit':false,
              },
              {
                  'id':2,
                  'title':'Finish Vue Todowith Vuex',
                  'completed':false,
                  'edit':false,
              }
          ]
      }
  },
  created(){
eventBus.$on('removeTodo',(id)=>this.removetodo(id))
eventBus.$on('compledtedEdit',(data)=>this.compledtedEdit(data))
eventBus.$on('checkAllChanged',(checked)=>this.checkAllTodos(checked))
eventBus.$on('filterChanged',(filter)=>this.filter=filter)
 eventBus.$on('clearCompletedTodos', () => this.clearCompleted())
  },
   beforeDestroy() {
    eventBus.$off('removedTodo')
    eventBus.$off('finishedEdit')
    eventBus.$off('checkAllChanged')
    eventBus.$off('filterChanged')
    eventBus.$off('clearCompletedTodos')
  },
 
  computed:{
  remain(){
    return this.todos.filter(todo=>!todo.completed).length
    },
  checkRemain() {
      return this.remain != 0
    },
  todosFiltered() {
      if (this.filter == 'all') {
        return this.todos
      } 
     else if (this.filter == 'active') {
        return this.todos.filter(todo => !todo.completed)
      } 
      else if (this.filter == 'completed') {
        return this.todos.filter(todo => todo.completed)
      }
      return this.todos
    },
    showClearCompletedButton() {
      return this.todos.filter(todo => todo.completed).length > 0
    }
  },
  
     methods:
    {
      addTodo(){
        //  console.log($event)
        if(this.newTodo.trim().length==0){
          return;
        }
        this.todos.push({
          id:this.idForTodo,
            title:this.newTodo,
        completed:false,           
          })

          this.newTodo=''
          this.idForTodo++
          },
          
          removeTodo(id){
            const index=this.todos.findindex((item)=>item.id==id)
            this.todos.splice(index,1)
          },
          checkAllTodos(){
            this.todos.forEach((todo)=>todo.completed=event.target.checked)
          },
          clearCompleted(){
            this.todos = this.todos.filter(todo => !todo.completed)
          },

          compledtedEdit(data){
             const index = this.todos.findIndex((item) => item.id == data.id)
             this.todos.splice(index,1,data)
          }
      } 
  }
</script>

<style>
.completed {
    text-decoration: line-through;
    color:green;
  }
</style>
