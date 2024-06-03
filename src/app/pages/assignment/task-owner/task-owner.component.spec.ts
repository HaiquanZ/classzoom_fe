import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskOwnerComponent } from './task-owner.component';

describe('TaskOwnerComponent', () => {
  let component: TaskOwnerComponent;
  let fixture: ComponentFixture<TaskOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
