import { Component } from "@angular/core";
import { Task } from "./components/task/task_interface"; // Import interface of Tasks, to enable type checking.

// Application entry point component.
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Our First ToDo App";
  // Task list with predefines to play with. Strictly typed.
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
    }
  ];

  /**
   * Handler of a task deletion
   * @param id Id of task to delete
   */
  onDeleted(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  /**
   * Method called to add a new task.
   * @param taskText text of a new task
   */
  addTask(taskText: string) {
    let new_id = this.tasks.length;
    this.tasks.push({
      id: new_id,
      text: taskText,
      complete: false
    });
  }
}
