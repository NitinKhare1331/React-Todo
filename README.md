# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Overview
- Todo app has functionality of adding a todo, deleting a todo as well as a check and uncheck image which shows todo is completed or not.
- The data is stored in the local storage in String format using JSON.Stringify.
- It has 2 main components i.e Todo_Items and Todo.
- Tailwind CSS is used for designing.
- todoList is stored as an string in local storage using UseState hook.
- newTodo is an object which has a unique id, text and a property isComplete that is set to false.
- UseRef hook is used get the inner text of input tag.

- Todo component has 3 main function i.e add, deleteTodo and toggle.

# add function
- add function is used to add the todo to the todoList.
- Firstly it checks that if the inner text of input field is empty, then it returns null.
- If the input field is not null, then a new todo is created and then added to todoList using setTodoList method which destructures the current todoList and adds newTodo in the array.
- After that input field is set to an empty string so that after adding a todo, the input field shows empty.

# deleteTodo function
- deleteTodo function takes id as an argument.
- setTodoList method is called which filters the result on the basis of id.
- It returns the new array of todo items whose id does not match with the id of todo item which is to be deleted.

# toggle function
- toggle function takes id as an argument.
- This function changes the tick to not_tick and vice versa when it is get clicked and also changes the value of isComplete key to true if it is false and vice versa using isComplete: !todo.isComplete.
- setTodoList method is called which returns a new array of todo items and changes the value of isComplete key to true and false depending on the condition.


# UseEffect hook is used to store the todoItems in the local storage of browser using localStorage.setItem() which accepts a key and value.
# Dependency array contains todoList.

# In Todo component, add delete and toggle function are used as props whose value is coming from Todo_Items component.

