import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleFilesComponent } from './multiple-files.component';

describe('MultipleFilesComponent', () => {
  let component: MultipleFilesComponent;
  let fixture: ComponentFixture<MultipleFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
