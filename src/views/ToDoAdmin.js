import React, { useState } from 'react';
import ToDoForm from '../components/ToDoForm';
import { createToDo } from '../services/toDoRoute';

export default function ToDoAdmin() {
  const [todo, setTodo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createToDo(todo);
      alert('yay');
    } catch {
      alert('error');
    }
    setTodo('');
    window.location.reload();
  };

  return (
    <div>
      <ToDoForm todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
    </div>
  );
}
