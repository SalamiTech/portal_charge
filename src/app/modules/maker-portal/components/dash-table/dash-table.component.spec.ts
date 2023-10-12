import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashTableComponent } from './dash-table.component';

describe('DashTableComponent', () => {
  let component: DashTableComponent;
  let fixture: ComponentFixture<DashTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashTableComponent]
    });
    fixture = TestBed.createComponent(DashTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
