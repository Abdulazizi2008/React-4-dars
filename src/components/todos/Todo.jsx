import "./todo.css";
import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([
    "do homework",
    "read the book",
    "feed the cat",
    "sleep for 10 hours",
  ]);

  function deleTodo(todoIndex) {
    const filteredTodos = todos.filter((todo, index) => index !== todoIndex);
    setTodos(filteredTodos);
  }
  return (
    <div>
      <div className="par1">Tasks to do - {todos.length}</div>
      <ol>
        {todos.map((todo, index) => (
          <li key={index} className="todo">
            <p>{todo}</p>
            <button onClick={() => deleTodo(index)}>🗑️</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todo;
