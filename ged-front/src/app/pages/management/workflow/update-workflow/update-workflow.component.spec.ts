import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWorkflowComponent } from './update-workflow.component';

describe('UpdateWorkflowComponent', () => {
  let component: UpdateWorkflowComponent;
  let fixture: ComponentFixture<UpdateWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateWorkflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
