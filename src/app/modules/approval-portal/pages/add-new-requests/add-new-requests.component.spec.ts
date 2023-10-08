import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewRequestsComponent } from './add-new-requests.component';

describe('AddNewRequestsComponent', () => {
  let component: AddNewRequestsComponent;
  let fixture: ComponentFixture<AddNewRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewRequestsComponent]
    });
    fixture = TestBed.createComponent(AddNewRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
