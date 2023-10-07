import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementsComponent } from './user-managements.component';

describe('UserManagementsComponent', () => {
  let component: UserManagementsComponent;
  let fixture: ComponentFixture<UserManagementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserManagementsComponent]
    });
    fixture = TestBed.createComponent(UserManagementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
