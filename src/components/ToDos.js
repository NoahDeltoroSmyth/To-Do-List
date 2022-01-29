import React from 'react';

export default function ToDos({ todos, handleClick, handleDeleteCompleted }) {
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <>
              <li key={todo.id}>
                <p>{todo.task}</p>
                <input
                  type="checkbox"
                  checked={todo.is_complete}
                  onChange={() => handleClick(todo)}
                />
              </li>
            </>
          );
        })}
      </ul>
      <button onClick={() => handleDeleteCompleted()}>Delete All Completed</button>
    </>
  );
}
