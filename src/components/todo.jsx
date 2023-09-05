import { useState } from "react";
import AddToDO from "./addToDo";
import ToDoItem from "./toDoitem";

function Todo() {
  const [todos, setTodos] = useState([]);

  const handleTodo = (text) => {
    const newItem = {
      title: text,
      status: false,
      id: new Date().toDateString + text
    };
    setTodos([...todos, newItem]);
  };
  console.log(todos);

  return (
    <div>
      <AddToDO handleTodo={handleTodo} />
      <ul>
        {todos.map((item) => (
          <ToDoItem key={item.key} title={item.title} status={item.status} />
        ))}
      </ul>
    </div>
  );
}
export default Todo;
