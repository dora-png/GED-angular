import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadStructureComponent } from './read-structure.component';

describe('ReadStructureComponent', () => {
  let component: ReadStructureComponent;
  let fixture: ComponentFixture<ReadStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
