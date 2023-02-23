import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent implements OnInit {
  todoId: any;
  todo: any;
  constructor(
    public todoService: TodoServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.todoId = params['id'];
        this.getupdateTodo();
      }
    });
  }

  post = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });
  onAddTodo() {
    return this.todoService.addTodo(this.post.value).subscribe(() => {
      this.post.reset();
      this.router.navigate(['/']);
    });
  }

  getupdateTodo() {
    return this.todoService.getTodo(this.todoId).subscribe((res: any) => {
      this.todo = res['todo'];
      console.log(this.todo);
    });
  }
}
