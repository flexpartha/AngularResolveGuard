import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArayComponent } from './form-aray.component';

describe('FormArayComponent', () => {
  let component: FormArayComponent;
  let fixture: ComponentFixture<FormArayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormArayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
