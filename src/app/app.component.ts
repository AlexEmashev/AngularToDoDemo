import { Component } from "@angular/core";
import { Task } from "./components/task/task_interface";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "todo";
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
  new_task = "";

  onDeleted(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  addTask(taskText: string) {
    let new_id = this.tasks.length;
    this.tasks.push({
      id: new_id,
      text: taskText,
      complete: false
    });
    this.new_task = "";
  }
}
