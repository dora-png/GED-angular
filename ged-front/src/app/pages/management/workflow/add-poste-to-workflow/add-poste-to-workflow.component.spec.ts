import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPosteToWorkflowComponent } from './add-poste-to-workflow.component';

describe('AddPosteToWorkflowComponent', () => {
  let component: AddPosteToWorkflowComponent;
  let fixture: ComponentFixture<AddPosteToWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPosteToWorkflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPosteToWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
