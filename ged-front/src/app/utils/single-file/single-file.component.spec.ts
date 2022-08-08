import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFileComponent } from './single-file.component';

describe('SingleFileComponent', () => {
  let component: SingleFileComponent;
  let fixture: ComponentFixture<SingleFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
