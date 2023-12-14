import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveInGroupComponent } from './add-remove-in-group.component';

describe('AddRemoveInGroupComponent', () => {
  let component: AddRemoveInGroupComponent;
  let fixture: ComponentFixture<AddRemoveInGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRemoveInGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveInGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
