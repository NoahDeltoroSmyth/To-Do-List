import React from 'react';

export default function ToDos({ todo, handleClick }) {
  return (
    <div className="todo">
      <div className="todo-text">
        <input
          checked={todo.is_complete}
          type="checkbox"
          onChange={() => handleClick(todo)}
        ></input>
        <p>{todo.task}</p>
      </div>
    </div>
  );
}
