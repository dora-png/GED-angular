import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupUserComponent } from './add-group-user.component';

describe('AddGroupUserComponent', () => {
  let component: AddGroupUserComponent;
  let fixture: ComponentFixture<AddGroupUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGroupUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroupUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
