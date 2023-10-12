import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRejectedComponent } from './form-rejected.component';

describe('FormRejectedComponent', () => {
  let component: FormRejectedComponent;
  let fixture: ComponentFixture<FormRejectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRejectedComponent]
    });
    fixture = TestBed.createComponent(FormRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
