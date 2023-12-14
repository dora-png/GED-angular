import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCourrierComponent } from './search-courrier.component';

describe('SearchCourrierComponent', () => {
  let component: SearchCourrierComponent;
  let fixture: ComponentFixture<SearchCourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCourrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
