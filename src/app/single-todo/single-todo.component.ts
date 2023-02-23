import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css'],
})
export class SingleTodoComponent implements OnInit {
  todo: any;
  todoId: any;
  constructor(
    public todoService: TodoServiceService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.todoId = params['id'];
      this.singleTodo();
    });
  }
  singleTodo() {
    this.todoService.getTodo(this.todoId).subscribe((res: any) => {
      this.todo = res['todo'];
      console.log(this.todo);
    });
  }
}
