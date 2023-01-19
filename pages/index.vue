<template>
  <main>
    <h1>To-Do list</h1>
    <p>Create a list of taks</p>

    <div class="create-new">
      <input 
      type="text" 
      v-model="newTask" 
      placeholder="Add a new task" 
      @keypress.enter="addTask" />
       <button @click="addTask">Add</button>
    </div>

    <div class="tasks">
      <Task
        v-for="(task, i) in $store.state.tasks"
        :key="i"
        :taks="task" />
    </div>

  </main>
</template>

<script>   
export default {
  data (){
    return {
      newTask: ''
    }
  },
 methods: {
     addTaks () {
      if(this.newTaks) {
        this.$store.commit('ADD_TAKS', this.newTrask);
        this.newTask = '';
      }
    }
 }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'fira sans', sans-serif;
}

body {
   background-color: rgb(38, 35, 54);
   color: white; 
}

main {
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-top: 2rem;
}

main h1 {
   font-size: 2.5rem;
   text-transform: capitalize;
   margin-bottom: 0.5rem; 
}

main h1 ~ p {
   margin-bottom: 2.5rem;
}

main .create-new {
   display: flex;
   justify-content: center;
   align-items: center;
   max-width: 550px;
}

main .create-new input {
   appearance: none;
   border: none;
   outline: none;
   border-bottom: 1px solid #FFF;
   background-color: transparent;
   color: #FFF;
   font-size: 1.5rem;
   padding-top: 0.5rem;
   padding-bottom: 0.5rem;
   margin: 0;
   transition: 0.4s;
}


main .create-new button {
   appearance: none;
   border: none;
   outline: none;
   background-color: rgb(47, 214, 111);
   text-transform: uppercase;
   font-weight: bold;
   color: #000;
   font-size: 1.8rem;
   padding: 0.5rem 1 rem;
   border-radius: 0.5rem;
   margin-left: 0.5rem;
   cursor: pointer;
}

main .tasks {
   width: 100%;
   max-width: 480px;
   margin-top: 2rem;
}

main .tasks .task {
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-color: rgb(52, 47, 78);
   padding: 1rem;
   border-radius: 0.5rem;
   margin-bottom: 1rem;
}

main .tasks .taks .button {
   min-width: fit-content;
}

main .tasks .taks button {
   appearance: none;
   border: none;
   outline: none;
   background-color: rgb(47, 214, 111);
   text-transform: uppercase;
   font-weight: bold;
   color: #000;
   font-size: 0.875rem;
   padding: 0.5rem 1rem;
   border-radius: 0.5rem;
   margin-left: 0.5rem;
   cursor: pointer;
}

main .tasks .taks button.delete {
   background-color: crimson;
   color: #eee;
}

.taks .taks.is-complate {
   opacity: 0.7;
}

.tasks .taks.is-complate .content {
   text-decoration: line-through;
}
</style>