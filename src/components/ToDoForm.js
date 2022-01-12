import React from 'react';

export default function ToDoForm({ todo, setTodo, handleSubmit }) {
  return (
    <div>
      <form>
        <h2>What would you like to get done today?</h2>
        <div className="form-input">
          <label>Task:</label>
          <input
            placeholder="let's gooooo"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={handleSubmit}>Save Task</button>
        </div>
      </form>
    </div>
  );
}
