import { useState } from "react";

function ToDo() {
  // state for todos
  const [todos, setTodos] = useState([]);
  // state for input field
  const [newTodo, setNewTodo] = useState("");

  // handle add todo
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) {
      alert("⚠️ Todo cannot be empty!");
      return;
    }

    setTodos([...todos, newTodo]); // add new todo
    setNewTodo(""); // clear input
  };

  // handle delete todo
  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>📝 Todo List</h1>

      {/* Add Todo Form */}
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {/* Conditional Rendering */}
      {todos.length === 0 ? (
        <p>No tasks yet. Add one! 🚀</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((todo, index) => (
            <li
              key={index}
              style={{
                margin: "10px 0",
                border: "1px solid #ccc",
                padding: "8px",
                borderRadius: "5px",
              }}
            >
              {todo}  
              <button
                style={{ marginLeft: "10px", cursor: "pointer" }}
                onClick={() => handleDelete(index)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToDo;
