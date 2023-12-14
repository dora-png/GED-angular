import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLiasseComponent } from './list-liasse.component';

describe('ListLiasseComponent', () => {
  let component: ListLiasseComponent;
  let fixture: ComponentFixture<ListLiasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLiasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLiasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
