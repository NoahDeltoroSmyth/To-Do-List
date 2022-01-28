import React, { useState, useEffect } from 'react';
import { fetchToDos, checkCompleted, deleteToDoById, deleteCompleted } from '../services/toDoRoute';
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

  const handleDeleteCompleted = async () => {
    await deleteCompleted();
    const newTodos = todos.filter((todo) => !todo.is_complete);
    setTodos(newTodos);
  };

  // const handleDelete = async ({ id }) => {
  //   const shouldDelete = confirm('Do you want to delete this task?');
  //   if (shouldDelete) {
  //     const resp = await deleteToDoById(id);
  //     setTodos(resp);
  //   }
  //   window.location.reload();
  // };

  //an attempt to make one main delete button to control all todo's was made
  //grab todos state
  //filter out todos state all that are !checked (keeping)
  //map through state, delete from database completed todos
  //reset state with filtered todos (keeping)

  return (
    <>
      <ToDos
        todos={todos}
        handleClick={handleClick}
        handleDeleteCompleted={handleDeleteCompleted}
      />
    </>
  );
}
