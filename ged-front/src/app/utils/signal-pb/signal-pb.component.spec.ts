import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalPbComponent } from './signal-pb.component';

describe('SignalPbComponent', () => {
  let component: SignalPbComponent;
  let fixture: ComponentFixture<SignalPbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalPbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalPbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
