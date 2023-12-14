import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPosteComponent } from './read-poste.component';

describe('ReadPosteComponent', () => {
  let component: ReadPosteComponent;
  let fixture: ComponentFixture<ReadPosteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadPosteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadPosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
