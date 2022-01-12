import React from 'react';

export default function ToDos({ todo, handleClick }) {
  return (
    <div className="todo">
      <div>
        <input
          checked={todo.is_complete}
          type="checkbox"
          onChange={() => handleClick(todo)}
        ></input>
      </div>
      <div className="todo-text">
        <p>{todo.task}</p>
      </div>
    </div>
  );
}
