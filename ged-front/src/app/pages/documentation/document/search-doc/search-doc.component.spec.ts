import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDocComponent } from './search-doc.component';

describe('SearchDocComponent', () => {
  let component: SearchDocComponent;
  let fixture: ComponentFixture<SearchDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
