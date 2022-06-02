import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCourrierComponent } from './list-courrier.component';

describe('ListCourrierComponent', () => {
  let component: ListCourrierComponent;
  let fixture: ComponentFixture<ListCourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCourrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
