import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendCourrierToStructureComponent } from './send-courrier-to-structure.component';

describe('SendCourrierToStructureComponent', () => {
  let component: SendCourrierToStructureComponent;
  let fixture: ComponentFixture<SendCourrierToStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendCourrierToStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendCourrierToStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
