import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWorkflowComponent } from './delete-workflow.component';

describe('DeleteWorkflowComponent', () => {
  let component: DeleteWorkflowComponent;
  let fixture: ComponentFixture<DeleteWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteWorkflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
