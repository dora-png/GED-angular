import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLiasseComponent } from './delete-liasse.component';

describe('DeleteLiasseComponent', () => {
  let component: DeleteLiasseComponent;
  let fixture: ComponentFixture<DeleteLiasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLiasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLiasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
