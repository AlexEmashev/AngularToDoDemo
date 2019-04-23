import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoInputComponent } from './todo-input.component';

@NgModule({
  declarations: [
    // Used to allow other modules to import components defined in this module
    TodoInputComponent // Components declared
  ],
  exports: [TodoInputComponent],
  imports: [CommonModule]
})
export class ToDoInputModule {}
