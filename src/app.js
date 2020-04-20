import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascrit loaded');
  new Vue({
    el: '#app',
    data: {
        todos: [
          {task: "buy shopping", priority: "High"},
          {task: "clean bathroom", priority: "Low"},
          {task: "file letters", priority: "Low"},
          {task: "shave", priority: "High"}
        ],
        newTodo: "",
        todoPriority: "High"
    },

    methods: {
      addNewTodo: function(){
        const newItem = {task: this.newTodo, priority: this.todoPriority}

        this.todos.push(newItem);
        this.newTodo = "";
      }
    }


  });

});
