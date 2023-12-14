import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUserToSubposteComponent } from './set-user-to-subposte.component';

describe('SetUserToSubposteComponent', () => {
  let component: SetUserToSubposteComponent;
  let fixture: ComponentFixture<SetUserToSubposteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetUserToSubposteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetUserToSubposteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
