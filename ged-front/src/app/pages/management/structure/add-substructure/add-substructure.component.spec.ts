import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubstructureComponent } from './add-substructure.component';

describe('AddSubstructureComponent', () => {
  let component: AddSubstructureComponent;
  let fixture: ComponentFixture<AddSubstructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubstructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
