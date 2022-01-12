import React, { useState, useEffect } from 'react';
import { fetchToDos, checkCompleted } from '../services/toDoRoute';
import ToDos from '../components/ToDos';

export default function ToDoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchToDos();
      setTodos(data);
    };
    fetchData();
  }, []);

  const handleClick = async (todo) => {
    await checkCompleted(todo.id, !todo.is_complete);
    const resp = await fetchToDos();
    setTodos(resp);
  };

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id}>
          <ToDos todo={todo} handleClick={handleClick} />
        </div>
      ))}
    </div>
  );
}
