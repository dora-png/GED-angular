import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCourrierComponent } from './update-courrier.component';

describe('UpdateCourrierComponent', () => {
  let component: UpdateCourrierComponent;
  let fixture: ComponentFixture<UpdateCourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCourrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
