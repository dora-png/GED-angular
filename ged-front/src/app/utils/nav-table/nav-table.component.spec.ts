import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTableComponent } from './nav-table.component';

describe('NavTableComponent', () => {
  let component: NavTableComponent;
  let fixture: ComponentFixture<NavTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
