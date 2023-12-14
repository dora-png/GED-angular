import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTypedocComponent } from './delete-typedoc.component';

describe('DeleteTypedocComponent', () => {
  let component: DeleteTypedocComponent;
  let fixture: ComponentFixture<DeleteTypedocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTypedocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTypedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
