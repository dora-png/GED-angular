import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoseStructureComponent } from './chose-structure.component';

describe('ChoseStructureComponent', () => {
  let component: ChoseStructureComponent;
  let fixture: ComponentFixture<ChoseStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoseStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoseStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
