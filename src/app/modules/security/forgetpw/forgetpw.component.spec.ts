import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpwComponent } from './forgetpw.component';

describe('ForgetpwComponent', () => {
  let component: ForgetpwComponent;
  let fixture: ComponentFixture<ForgetpwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetpwComponent]
    });
    fixture = TestBed.createComponent(ForgetpwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
