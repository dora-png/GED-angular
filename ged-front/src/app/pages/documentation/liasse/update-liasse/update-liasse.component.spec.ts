import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLiasseComponent } from './update-liasse.component';

describe('UpdateLiasseComponent', () => {
  let component: UpdateLiasseComponent;
  let fixture: ComponentFixture<UpdateLiasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLiasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLiasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
