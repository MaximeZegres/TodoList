// TodoList object
var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    // this.todos[position] = todoText;
    this.todos[position].todoText = todoText;

  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    this.todos[position].completed = !this.todos[position].completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    this.todos.forEach(function (todo) {
      if (todos.completed === true) {
      completedTodos++;
      }
    });

    // Case 1: If everything is true, make everything false
    if (completedTodos === totalTodos) {
    this.todos.forEach(function(todo) {
      todo.completed = false;
    });
    
      // Case 2 Otherwise, make everything true
    } else {
      this.todos.forEach(function(todo) {
        todo.completed = true;
      });
    }
  }
};

// Handlers object
var handlers = {
  toggleAll: function() {
  todoList.toggleAll();
  view.displayTodos();
  }, 
  addTodo: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    var changeTodoPositionInput = '';
    var changeTodoTextInput = '';
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    var toggleCompletedPositionInput = '';
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';

    todoList.todos.forEach(function (todo, position) {
      var todosLi = document.createElement('li');
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
    
      todosLi.id = position;
      todosLi.textContent = todoTextWithCompletion;
      todosLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todosLi);
    }, this);

  }, 
  createDeleteButton: function() {
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'deleteButton';
      return deleteButton;
  },
  setUpEventListeners: function() {
      var todosUl = document.querySelector('ul');
      todosUl.addEventListener('click', function (event) {
        var elementClicked = event.target;

        if (elementClicked.className === 'deleteButton') {
          handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
        }
    });
  }
};

view.setUpEventListeners();

