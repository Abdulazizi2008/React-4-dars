import { useState } from "react";
import "./App.css";
import Todo from "./components/todos/Todo";

function App() {
  return (
    <>
      <div className="container">
        <div className="all">
          <Todo />
        </div>
      </div>
    </>
  );
}

export default App;
