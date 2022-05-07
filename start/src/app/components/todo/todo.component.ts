import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interface/todo';
import * as TodoService from 'src/app/service/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  messaggio: string = 'Caricamento...';
  todos: Todo[] = [];
  completati: Todo[] = [];
  newTodo: string;

  constructor() {
    if (!this.todos.length || this.todos === []) {
      this.noTasks();
    }
    this.inizio();
  }

  saveTodo() {
    if (this.newTodo) {
      TodoService.add(this.newTodo).then((ele) => {
        console.log(ele);
        this.newTodo = '';
      });
    } else {
      alert('Nessun Task inserito!');
    }
  }

  removeTodo(ele: Todo, id: number) {
    TodoService.update(ele, id).then(() => {
      this.todos = this.todos.filter((ele, i) => i !== id);
      //controlli
      console.log(ele);
      console.log(this.todos);
      this.completati.push(ele);
      console.log(this.completati);
    });
    if (!this.todos.length || this.todos === []) {
      this.noTasks();
    }
  }

  ngOnInit(): void {}

  noTasks() {
    let p = new Promise((succ, err) => {
      setTimeout(() => {
        succ((this.messaggio = 'Nessun Task presente.'));
      }, 2000);
    });
    return p;
  }

  inizio() {
    TodoService.get().then((ele) => {
      this.todos = ele;
    });
  }
}
