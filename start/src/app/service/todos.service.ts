import { Todo } from '../interface/todo';

let todos: Todo[] = [];
let completati: Todo[] = [];
let newTodo: string;

export function get(): Promise<Todo[]> {
  return new Promise((response, reject) => {
    setTimeout(() => {
      response(todos);
    }, 2000);
  });
}

export function add(nuovoTask: string): Promise<Todo> {
  return new Promise((response, reject) => {
    setTimeout(() => {
      const todoInLista: Todo = {
        id: todos.length,
        title: nuovoTask,
        completed: false,
      };
      todos.push(todoInLista);
      response(todoInLista);
    }, 2000);
  });
}

export function update(completato: Todo, index: number) {
  return new Promise((response, reject) => {
    setTimeout(() => {
      let nuovo = completato;
      nuovo.completed = true;
      completati.push(nuovo);
      response(nuovo);
    }, 1500);
  });
}

export function getCompletati(): Promise<Todo[]> {
  return new Promise((response, reject) => {
    setTimeout(() => {
      response(completati);
    }, 1500);
  });
}
