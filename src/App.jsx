import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  function persistData(newList) {
    //newList is array (todos state is array)
    //turn it into object and stringify
    //pass it into localStorage
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  };

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      //"index" points to the item we want to delete
      //only items that have indexes that are different from the "index" will stay
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  };

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  };

  useEffect(() => {
    //If localStorage is empty
    if (!localStorage) {
      return
    }

    //Retrieve todos from localStorage
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  )
}

export default App
