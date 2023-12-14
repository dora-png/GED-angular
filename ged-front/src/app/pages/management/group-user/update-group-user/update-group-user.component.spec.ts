import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGroupUserComponent } from './update-group-user.component';

describe('UpdateGroupUserComponent', () => {
  let component: UpdateGroupUserComponent;
  let fixture: ComponentFixture<UpdateGroupUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGroupUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGroupUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
