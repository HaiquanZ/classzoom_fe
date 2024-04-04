import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSubTaskComponent } from './detail-sub-task.component';

describe('DetailSubTaskComponent', () => {
  let component: DetailSubTaskComponent;
  let fixture: ComponentFixture<DetailSubTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSubTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailSubTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
