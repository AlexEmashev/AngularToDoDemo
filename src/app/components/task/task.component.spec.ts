import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import { FormsModule } from '@angular/forms'; 
import { TasksService } from '../../tasks.service';
import { ITask } from './task_interface';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskComponent ],
      providers: [TasksService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    let task: ITask = {
      id: 77,
      text: "Task text",
      complete: false,
      archived: false
    }
    component.task = task;
    component.archivedMode = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onClick delete button "deleted" should return id of deleted element', () => {
    let button = fixture.debugElement.nativeElement.querySelector('button');
    component.deleted.subscribe(deleted => {
      expect(deleted).toBe(77);
    })
    button.click();

  });
});