import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAssignmentComponent } from './owner-assignment.component';

describe('OwnerAssignmentComponent', () => {
  let component: OwnerAssignmentComponent;
  let fixture: ComponentFixture<OwnerAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
