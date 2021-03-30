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

  /** filter */
  phrase: string = '';

  /** sorter */
  direction: number = 1;
  columnKey: string = '';

  todos$: Observable<Todo[]> = this.todoService.getAll();

  selectedTodo: Todo = new Todo();

  constructor(
    private todoService: TodoService,
  ) {}

  /* delete */
  onDelete(todo: Todo): void {
    alert('Are you sure you want to delete?');
    this.todoService.delTodo(todo).subscribe(
      () => {
         this.todos$ = this.todoService.getAll();
       }
    );
  }

  /** filter */
  onFilterPhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  /** sorter */
  onColumnSelect(key: string): void {
    if (this.columnKey === key) {
      this.direction = this.direction * 1;  /* -1 esetén  */     /*  1 esetén  */     /*  1 esetén  */
    } else {                           /* NÖVEKVŐ és CSÖKKENŐ*/    /* NÖVEKVŐ */    /* CSÖKKENŐ  */
      this.direction = 1;                              /*  1 esetén  */    /*  1 esetén  */     /*  -1 esetén  */
    }
    this.columnKey = key;
  }

}
