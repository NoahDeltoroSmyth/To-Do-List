import React from 'react';

export default function ToDoForm({ todo, setTodo, handleSubmit }) {
  return (
    <div>
      <h1>Hello from todo</h1>
      <form>
        <div>
          <label>Task:</label>
          <input
            placeholder="task"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Save Task</button>
      </form>
    </div>
  );
}
