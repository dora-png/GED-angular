import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadWorkflowComponent } from './read-workflow.component';

describe('ReadWorkflowComponent', () => {
  let component: ReadWorkflowComponent;
  let fixture: ComponentFixture<ReadWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadWorkflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
