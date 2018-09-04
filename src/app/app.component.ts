import { Component, OnInit } from "@angular/core";
import { Task } from "./components/task/task_interface"; // Import interface of Tasks, to enable type checking.
import { TasksService } from "./tasks.service"; // Import task service.

// Application entry point component.
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Our First ToDo App";
  // Task list with predefines to play with. Strictly typed.
  tasks: Task[];

  /**
   * Constructor, kek
   */
  constructor(private taskService: TasksService) { }

  ngOnInit() {
   this.tasks = this.taskService.getTasks()
   this.taskService.tasksUpdated.subscribe(tasks => {
     this.tasks = [...tasks]
    })
  }
  /**
   * Handler of a task deletion
   * @param id Id of task to delete
   */
  onDeleted(id: number) {
    this.taskService.deleteTask(id)
  }

  /**
   * Method called to add a new task.
   * @param taskText text of a new task
   */
  addTask(taskText: string) {
    this.taskService.addTask(taskText)
  }
}
