import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamOverloadComponent } from './team-overload.component';

describe('TeamOverloadComponent', () => {
  let component: TeamOverloadComponent;
  let fixture: ComponentFixture<TeamOverloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamOverloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamOverloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
