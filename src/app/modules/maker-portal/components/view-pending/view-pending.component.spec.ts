import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPendingComponent } from './view-pending.component';

describe('ViewPendingComponent', () => {
  let component: ViewPendingComponent;
  let fixture: ComponentFixture<ViewPendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPendingComponent]
    });
    fixture = TestBed.createComponent(ViewPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
