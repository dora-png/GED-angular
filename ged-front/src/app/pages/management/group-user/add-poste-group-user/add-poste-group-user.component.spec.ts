import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPosteGroupUserComponent } from './add-poste-group-user.component';

describe('AddPosteGroupUserComponent', () => {
  let component: AddPosteGroupUserComponent;
  let fixture: ComponentFixture<AddPosteGroupUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPosteGroupUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPosteGroupUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
