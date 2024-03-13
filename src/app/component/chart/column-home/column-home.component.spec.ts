import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnHomeComponent } from './column-home.component';

describe('ColumnHomeComponent', () => {
  let component: ColumnHomeComponent;
  let fixture: ComponentFixture<ColumnHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
