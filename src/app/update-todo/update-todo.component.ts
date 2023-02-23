import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css'],
})
export class UpdateTodoComponent implements OnInit {
  todoId: any;
  todo!: any;
  constructor(
    public todoService: TodoServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log('UPDATE ROUTE');
      this.todoId = params['id'];
      this.getupdateTodo();
    });
  }

  getupdateTodo() {
    return this.todoService.getTodo(this.todoId).subscribe((res: any) => {
      this.todo = res['todo'];
      // console.log(this.todo.title);
      // console.log(this.todo.description);
    });
  }

  post = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  onUpdateTodo() {
    return this.todoService
      .updateTodo(this.todoId, this.todo)
      .subscribe((res: any) => {
        console.log(this.post.value);
        console.log(this.todo);
        this.todo = this.post.value;
        // this.todo.description = this.post.value.description;
        this.todoService.newTodo.emit(this.todo);
        this.router.navigate(['/']);
      });
  }
}
