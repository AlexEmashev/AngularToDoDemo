import { Injectable, EventEmitter } from "@angular/core";
import { ITask } from "./components/task/task_interface";

@Injectable({
  providedIn: "root"
})
export class TasksService {
  /**
   * Callback that retun new list of tasks.
   */
  tasksUpdated: EventEmitter<ITask[]> = new EventEmitter();

  /**
   * Internal tasks attribute
   */
  private _tasks: ITask[] = [
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
  /**
   * Returns tasks litst
   */
  get tasks() {
    return this._tasks;
  }

  /**
   * Sets list of tasks
   */
  set tasks(tasks: ITask[]) {
    this._tasks = tasks;
    this.tasksUpdated.emit(this._tasks);
  }

  constructor() {}
  /**
   * Returns task list
   */
  getTasks(): ITask[] {
    return [...this.tasks]; // Pass new array of tasks
  }

  getArchivedTasks(): ITask[] {
    return this.tasks.filter(task => task.archived)
  }

  addTask(text: string): void {
    let new_id = this.tasks.length;
    this.tasks = [
      ...this.tasks,
      {
        id: new_id,
        text: text,
        complete: false
      }
    ];
  }

  completeTask(id: number): void {
    this.tasks = this.tasks.map(task => {
      if (task.id === id) {
        task.complete = !task.complete;
        if (task.complete){
          task.completedOn = new Date();
        } else {
          task.completedOn = null;
        }
      }
      return task;
    });
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  archiveTask(id: number): void {
    this.tasks = this.tasks.map(task => {
      if (task.id === id) {
        task.archived = true;
      }
      return task;
    })
  }
}
