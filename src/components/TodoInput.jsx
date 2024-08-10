import { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;


  return (
    <header>
      <input
        //bind the value to what user typed
        value={todoValue}
        //update the todoValue whenever user types sth
        onChange={(e) => {
          setTodoValue(e.target.value)
        }}
        placeholder="Enter todo ..."
      />

      <button onClick={() => {
        //when user clicks "Add"
        handleAddTodos(todoValue);
        //Let the input text to disappear after clicking "Add"
        setTodoValue('');
      }}>
        Add
      </button>
    </header>
  )
}