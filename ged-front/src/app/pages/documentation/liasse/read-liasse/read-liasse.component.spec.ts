import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadLiasseComponent } from './read-liasse.component';

describe('ReadLiasseComponent', () => {
  let component: ReadLiasseComponent;
  let fixture: ComponentFixture<ReadLiasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadLiasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadLiasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
