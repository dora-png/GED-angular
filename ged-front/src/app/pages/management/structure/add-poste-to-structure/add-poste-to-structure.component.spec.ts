import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPosteToStructureComponent } from './add-poste-to-structure.component';

describe('AddPosteToStructureComponent', () => {
  let component: AddPosteToStructureComponent;
  let fixture: ComponentFixture<AddPosteToStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPosteToStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPosteToStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
