import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task_interface'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task:Task
  @Output() deleted = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {

  }

  delete(id:number) {
    this.deleted.emit(id)
  }

}
