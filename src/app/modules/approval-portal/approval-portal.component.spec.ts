import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalPortalComponent } from './approval-portal.component';

describe('ApprovalPortalComponent', () => {
  let component: ApprovalPortalComponent;
  let fixture: ComponentFixture<ApprovalPortalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovalPortalComponent]
    });
    fixture = TestBed.createComponent(ApprovalPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
