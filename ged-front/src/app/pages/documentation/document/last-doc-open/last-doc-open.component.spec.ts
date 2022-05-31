import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastDocOpenComponent } from './last-doc-open.component';

describe('LastDocOpenComponent', () => {
  let component: LastDocOpenComponent;
  let fixture: ComponentFixture<LastDocOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastDocOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastDocOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
