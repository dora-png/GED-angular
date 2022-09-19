import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubStructureComponent } from './list-sub-structure.component';

describe('ListSubStructureComponent', () => {
  let component: ListSubStructureComponent;
  let fixture: ComponentFixture<ListSubStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSubStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
