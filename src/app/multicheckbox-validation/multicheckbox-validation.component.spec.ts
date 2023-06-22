import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticheckboxValidationComponent } from './multicheckbox-validation.component';

describe('MulticheckboxValidationComponent', () => {
  let component: MulticheckboxValidationComponent;
  let fixture: ComponentFixture<MulticheckboxValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulticheckboxValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticheckboxValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
