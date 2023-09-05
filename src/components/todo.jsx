import { useState } from "react";

function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChanges = (e) => {
    setText(e.target.value);
  };

  const handleTodo = () => {
    const newItem = {
      title: text,
      status: false,
      id: new Date().toDateString + text
    };
    setTodos([...todos, newItem]);
    setText("");
  };
  console.log(todos);

  return (
    <div>
      <div>
        <input
          onChange={handleChanges}
          value={text}
          placeholder="Add Something"
        />
        <button onClick={handleTodo}>Add</button>
      </div>
      <h3>{text}</h3>
      <ul>
        {todos.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Todo;
