import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypedocComponent } from './update-typedoc.component';

describe('UpdateTypedocComponent', () => {
  let component: UpdateTypedocComponent;
  let fixture: ComponentFixture<UpdateTypedocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTypedocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
