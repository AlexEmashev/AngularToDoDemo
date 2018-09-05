import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../tasks.service';
import { ITask } from '../../components/task/task_interface'

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  
  tasks:ITask[]

  constructor(private tasksService: TasksService) { }
  
  ngOnInit() {
    this.tasks = this.tasksService.getArchivedTasks()
    this.tasksService.tasksUpdated.subscribe(() => {
      this.tasks = this.tasksService.getArchivedTasks()
    })
  }

  /**
   * Handler of a task deletion
   * @param id Id of task to delete
   */
  onDeleted(id: number) {
    this.tasksService.deleteTask(id)
  }

}
