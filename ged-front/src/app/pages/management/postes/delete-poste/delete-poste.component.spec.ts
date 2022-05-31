import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePosteComponent } from './delete-poste.component';

describe('DeletePosteComponent', () => {
  let component: DeletePosteComponent;
  let fixture: ComponentFixture<DeletePosteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePosteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
