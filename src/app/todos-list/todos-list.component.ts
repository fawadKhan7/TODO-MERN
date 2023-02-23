import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent implements OnInit, OnDestroy {
  todos: any;
  todoID: string = '';
  constructor(public todoService: TodoServiceService) {}

  ngOnInit(): void {
    this.getTodos();
    this.todoService.newTodo.subscribe((todo) => console.log(todo));
  }

  ngOnDestroy(): void {
    this.todoService.newTodo.unsubscribe();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((res: any) => {
      this.todos = res['todos'];
      // console.log(this.todos);
    });
  }

  onDelete(id: any) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.getTodos();
    });
  }
}
