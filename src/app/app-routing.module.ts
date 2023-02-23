import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';

const routes: Routes = [
  { path: 'createTodo', component: CreateTodoComponent },
  { path: '', component: TodosListComponent },
  { path: ':id', component: SingleTodoComponent },
  { path: 'updateTodo/:id', component: UpdateTodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
