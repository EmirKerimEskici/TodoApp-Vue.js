<template>
  <div id="app">
    <div class="container">
     <tag-component></tag-component>
      <input type="text" class="input" v-model="newTodo">
      <button class="add" @click="add()">Add</button>
      <ul class="main-list">
        <li v-for="(todo,i) in existingTodo" v-bind:key="i">
          <span class="text"> <hr class="hr">
            <button class="done" @click="done(todo)">O</button>
              {{i+1}}: {{todo.text}}
          </span>
          <button @click="deleteTodo(i)" class="remove-btn"><b>X</b></button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data (){
    return {
      newTodo:'',
      existingTodo:[],
      doneTodo:[]
    }},
  methods:{
    add(){
      this.existingTodo.push({
        text: this.newTodo,
        id: new Date().valueOf()
      }),
      this.newTodo=''
    },
    deleteTodo(i){
      this.existingTodo.splice(i,1)
    },
    done(todo){
    this.existingTodo.splice(this.existingTodo.indexOf(todo),1)
    this.doneTodo.push(todo)
    console.log(this.existingTodo)
    console.log(this.doneTodo)
}
    },
}
</script>
<style>
#app{
  background-color: rgb(0, 0, 0);
}
.container{
  height: 600px;
  width: 450px;
  background-color: rgb(21, 13, 71);
  margin-left: 450px;
}
.h1{
  margin-left: 35%;
  padding-top: 35px;
  color: aliceblue;
}
.input{
  width: 250px;
  margin-left: 80px;
}
.remove-btn{
  margin-left: 15px;
}
.text{
  color: aliceblue;
}
.main-list{
  list-style: none;
}
.check{
  margin-left: 35px;
}
.hr{
  margin-left: 35px;
  width: 300px;
}
.done{
margin-left: 35px;
}
</style>
