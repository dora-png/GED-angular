import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDroitsComponent } from './set-droits.component';

describe('SetDroitsComponent', () => {
  let component: SetDroitsComponent;
  let fixture: ComponentFixture<SetDroitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetDroitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDroitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
