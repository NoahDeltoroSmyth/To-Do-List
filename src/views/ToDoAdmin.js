import React, { useState } from 'react';
import ToDoForm from '../components/ToDoForm';
import { createToDo } from '../services/toDoRoute';

export default function ToDoAdmin({ setCurrentUser }) {
  const [todo, setTodo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await createToDo(todo);
      setCurrentUser(resp);
    } catch {
      alert('error');
    }
  };

  return (
    <div>
      <ToDoForm todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
    </div>
  );
}
