import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadDocComponent } from './read-doc.component';

describe('ReadDocComponent', () => {
  let component: ReadDocComponent;
  let fixture: ComponentFixture<ReadDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
