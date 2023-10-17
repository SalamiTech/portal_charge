import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectreasondialogueComponent } from './rejectreasondialogue.component';

describe('RejectreasondialogueComponent', () => {
  let component: RejectreasondialogueComponent;
  let fixture: ComponentFixture<RejectreasondialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejectreasondialogueComponent]
    });
    fixture = TestBed.createComponent(RejectreasondialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
