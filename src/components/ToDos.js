import React from 'react';

export default function ToDos({ todo, handleClick }) {
  return (
    <div>
      <p>{todo.task}</p>
      <input checked={todo.is_complete} type="checkbox" onChange={() => handleClick(todo)}></input>
    </div>
  );
}
