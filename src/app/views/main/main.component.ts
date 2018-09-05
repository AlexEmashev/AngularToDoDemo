import { Component, OnInit } from '@angular/core';
import { ITask } from "../../components/task/task_interface"; // Import interface of Tasks, to enable type checking.
import { TasksService } from "../../tasks.service"; // Import task service.

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // Task list with predefines to play with. Strictly typed.
  tasks: ITask[];
  new_task: string

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
    this.new_task = ''
  }

}
