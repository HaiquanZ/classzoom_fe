import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAssingmentComponent } from './card-assingment.component';

describe('CardAssingmentComponent', () => {
  let component: CardAssingmentComponent;
  let fixture: ComponentFixture<CardAssingmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAssingmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAssingmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
