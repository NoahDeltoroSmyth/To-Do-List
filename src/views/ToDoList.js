import React, { useState, useEffect } from 'react';
import { fetchToDos } from '../services/toDoRoute';
import ToDos from '../components/ToDos';

export default function ToDoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchToDos();
      setTodos(data);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <ToDos {...todo} />
        </div>
      ))}
    </div>
  );
}
