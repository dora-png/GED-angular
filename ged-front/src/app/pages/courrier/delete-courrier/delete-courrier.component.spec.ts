import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCourrierComponent } from './delete-courrier.component';

describe('DeleteCourrierComponent', () => {
  let component: DeleteCourrierComponent;
  let fixture: ComponentFixture<DeleteCourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCourrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
