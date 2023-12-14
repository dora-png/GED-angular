import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoleGroupUserComponent } from './add-role-group-user.component';

describe('AddRoleGroupUserComponent', () => {
  let component: AddRoleGroupUserComponent;
  let fixture: ComponentFixture<AddRoleGroupUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRoleGroupUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoleGroupUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
