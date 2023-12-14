import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveDroitComponent } from './add-remove-droit.component';

describe('AddRemoveDroitComponent', () => {
  let component: AddRemoveDroitComponent;
  let fixture: ComponentFixture<AddRemoveDroitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRemoveDroitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveDroitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
