import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPendingComponent } from './form-pending.component';

describe('FormPendingComponent', () => {
  let component: FormPendingComponent;
  let fixture: ComponentFixture<FormPendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPendingComponent]
    });
    fixture = TestBed.createComponent(FormPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
