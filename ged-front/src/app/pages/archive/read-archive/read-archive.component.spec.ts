import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadArchiveComponent } from './read-archive.component';

describe('ReadArchiveComponent', () => {
  let component: ReadArchiveComponent;
  let fixture: ComponentFixture<ReadArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
