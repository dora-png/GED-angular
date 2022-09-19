import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProfilesComponent } from './set-profiles.component';

describe('SetProfilesComponent', () => {
  let component: SetProfilesComponent;
  let fixture: ComponentFixture<SetProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
