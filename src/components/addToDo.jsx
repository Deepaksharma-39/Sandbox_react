import { useState } from "react";

function AddToDO({ handleTodo }) {
  const [text, setText] = useState("");
  const handleChanges = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    handleTodo(text);
    setText("");
  };
  return (
    <div>
      <input
        onChange={handleChanges}
        value={text}
        placeholder="Add Something"
      />
      <button onClick={onClick}>Add</button>
    </div>
  );
}

export default AddToDO;
