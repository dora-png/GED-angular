import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCourrierComponent } from './read-courrier.component';

describe('ReadCourrierComponent', () => {
  let component: ReadCourrierComponent;
  let fixture: ComponentFixture<ReadCourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadCourrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadCourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
