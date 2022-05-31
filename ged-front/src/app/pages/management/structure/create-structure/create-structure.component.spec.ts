import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStructureComponent } from './create-structure.component';

describe('CreateStructureComponent', () => {
  let component: CreateStructureComponent;
  let fixture: ComponentFixture<CreateStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
