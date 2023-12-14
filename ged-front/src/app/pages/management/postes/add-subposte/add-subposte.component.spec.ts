import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubposteComponent } from './add-subposte.component';

describe('AddSubposteComponent', () => {
  let component: AddSubposteComponent;
  let fixture: ComponentFixture<AddSubposteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubposteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubposteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
