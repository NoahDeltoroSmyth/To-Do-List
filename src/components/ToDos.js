import React from 'react';

export default function ToDos({ task }) {
  return (
    <div>
      <p>{task}</p>
      <input type="radio" value={task} />
    </div>
  );
}
