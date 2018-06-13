import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoImageAvailableComponent } from './no-image-available.component';

describe('NoImageAvailableComponent', () => {
  let component: NoImageAvailableComponent;
  let fixture: ComponentFixture<NoImageAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoImageAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoImageAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
