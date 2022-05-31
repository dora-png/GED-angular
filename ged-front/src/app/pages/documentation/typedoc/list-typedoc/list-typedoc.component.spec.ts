import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypedocComponent } from './list-typedoc.component';

describe('ListTypedocComponent', () => {
  let component: ListTypedocComponent;
  let fixture: ComponentFixture<ListTypedocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypedocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
