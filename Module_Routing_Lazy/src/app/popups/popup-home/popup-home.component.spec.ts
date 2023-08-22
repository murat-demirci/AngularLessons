import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupHomeComponent } from './popup-home.component';

describe('PopupHomeComponent', () => {
  let component: PopupHomeComponent;
  let fixture: ComponentFixture<PopupHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupHomeComponent]
    });
    fixture = TestBed.createComponent(PopupHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
