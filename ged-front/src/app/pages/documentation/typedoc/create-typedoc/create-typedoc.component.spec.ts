import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypedocComponent } from './create-typedoc.component';

describe('CreateTypedocComponent', () => {
  let component: CreateTypedocComponent;
  let fixture: ComponentFixture<CreateTypedocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTypedocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTypedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
