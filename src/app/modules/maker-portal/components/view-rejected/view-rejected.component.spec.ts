import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRejectedComponent } from './view-rejected.component';

describe('ViewRejectedComponent', () => {
  let component: ViewRejectedComponent;
  let fixture: ComponentFixture<ViewRejectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRejectedComponent]
    });
    fixture = TestBed.createComponent(ViewRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
