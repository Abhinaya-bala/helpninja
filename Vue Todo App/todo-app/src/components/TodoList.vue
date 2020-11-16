<template>
  <div>
    Todo List Goes Here
    <input type="text" class="todo-input" placeholder="What needs to be done" v-model="newTodo" @keyup.enter="addTodo">
    <div v-for="todo in todos" :key="todo.id" class="todo-item">
        {{todo.title}}
    </div>
 
 </div>
</template>

<script>
export default {
  name: 'todo-list',

  data(){
      return{
          newTodo:'',
          idForTodo:3,
          todos:[
              {
                  'id':1,
                  'title':'Finish Vue Todo',
                  'completed':false,
              },
              {
                  'id':2,
                  'title':'Finish Vue Todowith Vuex',
                  'completed':false,
              }
          ]
      }
  },
     methods:
    {
      addTodo($event){
        //  console.log($event)
          if($event.key=="Enter"){
        this.todos.push({
          id:this.idForTodo,
            title:this.newTodo,
        completed:false,           
          })

          this.newTodo=''
          this.idForTodo++
          
      }
      } 
    }
  }
</script>

<style>

</style>
