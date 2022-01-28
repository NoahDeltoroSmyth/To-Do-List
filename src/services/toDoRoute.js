import { client, checkError } from './client';

export async function createToDo(task) {
  const resp = await client.from('todos').insert([{ task: task, user_id: client.auth.user().id }]);
  return checkError(resp);
}

export async function fetchToDos() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}

export async function checkCompleted(id, is_complete) {
  const resp = await client.from('todos').update({ is_complete }).eq('id', id);
  return checkError(resp);
}

export async function deleteToDoById(id) {
  const resp = await client.from('todos').delete().eq('id', id);
  return checkError(resp);
}

export async function deleteCompleted() {
  const resp = client.from('todos').delete().eq('is_complete', true);
  return checkError(resp);
}
