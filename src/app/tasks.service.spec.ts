import { TestBed, inject } from '@angular/core/testing';

import { TasksService } from './tasks.service';

describe('TasksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasksService]
    });
  });

  it('should be created', inject([TasksService], (service: TasksService) => {
    expect(service).toBeTruthy();
  }));

  it('this.addTask("New task name") should add to task with name "New task name" to this.tasks',
    inject([TasksService],
      (service: TasksService) => {
        service.tasks = []
        let taskName: string = "New task name";
        service.addTask(taskName);
        expect(service.tasks.find(task => task.text === taskName)).toBeTruthy();
      }
    )
  );

  // it('this.addTask("Add task that is name already exists and NOT finished") should NOT add task to this.tasks',
  //   inject([TasksService],
  //     (service: TasksService) => {
  //       service.tasks = []
  //       let taskName: string = "Add task that is name already exists and NOT finished";
  //       service.addTask(taskName);
  //       service.addTask(taskName);
  //       expect(service.tasks.filter(task => task.text === taskName).length).toEqual(1);
  //     }
  //   )
  // );

  it('this.addTask("Add task that is name already exists and finished") should add task to this.tasks',
    inject([TasksService],
      (service: TasksService) => {
        service.tasks = []
        let taskName: string = "Add task that is name already exists";
        let taskId = service.tasks.length;
        service.addTask(taskName);
        service.completeTask(taskId);
        service.addTask(taskName);
        expect(service.tasks.filter(task => task.text === taskName).length).toEqual(2);
        expect(service.tasks.filter(task => task.text === taskName && task.complete === true).length).toEqual(1);
        expect(service.tasks.filter(task => task.text === taskName && task.complete === false).length).toEqual(1);

      }
    )
  );

});
