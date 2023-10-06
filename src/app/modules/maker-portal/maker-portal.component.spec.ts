import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerPortalComponent } from './maker-portal.component';

describe('MakerPortalComponent', () => {
  let component: MakerPortalComponent;
  let fixture: ComponentFixture<MakerPortalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakerPortalComponent]
    });
    fixture = TestBed.createComponent(MakerPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
