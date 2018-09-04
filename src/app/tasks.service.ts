import { Injectable, EventEmitter } from '@angular/core';
import { Task } from './components/task/task_interface'

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasksUpdated:EventEmitter<Task[]> = new EventEmitter();

  tasks: Task[] = [
    {
      id: 0,
      text: "Learn TypeScript",
      complete: true
    },
    {
      id: 1,
      text: "Learn Angular",
      complete: false
    },
    {
      id: 2,
      text: "Learn Services",
      complete: false
    }
  ];

  constructor() { }
  /**
   * Returns task list
   */
  getTasks(): Task[] {
    return [...this.tasks]; // Pass new array of tasks
  }

  addTask(text:string): void {
    let new_id = this.tasks.length;
    this.tasks = [...this.tasks, {
      id: new_id,
      text: text,
      complete: false
    }];
    this.tasksUpdated.emit(this.tasks)
  }

  completeTask(id: number): void {
    
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.tasksUpdated.emit(this.tasks)
  }
}
