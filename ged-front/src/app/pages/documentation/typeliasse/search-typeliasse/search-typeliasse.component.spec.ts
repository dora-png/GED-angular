import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTypeliasseComponent } from './search-typeliasse.component';

describe('SearchTypeliasseComponent', () => {
  let component: SearchTypeliasseComponent;
  let fixture: ComponentFixture<SearchTypeliasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTypeliasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTypeliasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
