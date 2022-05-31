import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStructureComponent } from './delete-structure.component';

describe('DeleteStructureComponent', () => {
  let component: DeleteStructureComponent;
  let fixture: ComponentFixture<DeleteStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
