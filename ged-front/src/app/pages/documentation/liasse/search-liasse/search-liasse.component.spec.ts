import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLiasseComponent } from './search-liasse.component';

describe('SearchLiasseComponent', () => {
  let component: SearchLiasseComponent;
  let fixture: ComponentFixture<SearchLiasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLiasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLiasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
