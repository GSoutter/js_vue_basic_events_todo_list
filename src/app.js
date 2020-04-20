import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascrit loaded');
  new Vue({
    el: '#app',
    data: {
        todos: ["buy shopping", "clean bathroom", "file letters", "shave"],
        newTodo: ""
    },

    methods: {
      addNewTodo: function(){
        this.todos.push(this.newTodo);
        this.newTodo = "";
      }
    }


  });

});
