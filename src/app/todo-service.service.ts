import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  baseUrl = 'http://localhost:3000/todo/';
  constructor(private http: HttpClient) {}

  newTodo = new EventEmitter<any>();

  getTodos() {
    return this.http.get(this.baseUrl);
  }

  getTodo(id: any) {
    return this.http.get(this.baseUrl + id);
  }

  addTodo(todo: any) {
    return this.http.post(this.baseUrl, todo);
  }
  deleteTodo(id: any) {
    return this.http.delete(this.baseUrl + id);
  }

  updateTodo(id: any, todo: any) {
    return this.http.put(this.baseUrl + id, todo);
  }
}
