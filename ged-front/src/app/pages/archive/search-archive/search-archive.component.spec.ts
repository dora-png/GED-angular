import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchArchiveComponent } from './search-archive.component';

describe('SearchArchiveComponent', () => {
  let component: SearchArchiveComponent;
  let fixture: ComponentFixture<SearchArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
