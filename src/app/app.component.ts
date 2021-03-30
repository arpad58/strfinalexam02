import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './model/todo';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos$: Observable<Todo[]> = this.todoService.getAll();

  selectedTodo: Todo = new Todo();

  constructor(
    private todoService: TodoService,
  ) {}

  onDelete(todo: Todo): void {
    alert('Are you sure you want to delete?');
    this.todoService.delTodo(todo).subscribe(
      () => {
         this.todos$ = this.todoService.getAll();
       }
    );
  }
}
