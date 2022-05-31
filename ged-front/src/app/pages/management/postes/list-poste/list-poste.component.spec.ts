import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPosteComponent } from './list-poste.component';

describe('ListPosteComponent', () => {
  let component: ListPosteComponent;
  let fixture: ComponentFixture<ListPosteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPosteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
