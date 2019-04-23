import { Component, OnInit, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  @Input() icon: string;
  // @ContentChild(InputRefDirective)
  // input: InputRefDirective;

  constructor() {}

  ngOnInit() {}
}
