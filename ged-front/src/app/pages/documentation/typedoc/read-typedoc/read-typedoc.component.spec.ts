import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadTypedocComponent } from './read-typedoc.component';

describe('ReadTypedocComponent', () => {
  let component: ReadTypedocComponent;
  let fixture: ComponentFixture<ReadTypedocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadTypedocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadTypedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
