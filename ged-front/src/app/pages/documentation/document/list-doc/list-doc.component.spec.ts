import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDocComponent } from './list-doc.component';

describe('ListDocComponent', () => {
  let component: ListDocComponent;
  let fixture: ComponentFixture<ListDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
