import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { CreateWorkflowComponent } from '../create-workflow/create-workflow.component';
import { ReadWorkflowComponent } from '../read-workflow/read-workflow.component';
import { UpdateWorkflowComponent } from '../update-workflow/update-workflow.component';


@Component({
  selector: 'app-list-workflow',
  templateUrl: './list-workflow.component.html',
  styleUrls: ['./list-workflow.component.scss']
})
export class ListWorkflowComponent implements OnInit {


  constructor(private openDialogService: OpenDialogService) { }

  ngOnInit(): void {
  }

  openDialogEdit(event: MouseEvent) {
    this.openDialogService.openDialog(UpdateWorkflowComponent);
  }

  openDialogHistoric(event: MouseEvent) {
    this.openDialogService.openDialog(ReadWorkflowComponent);
  }

  newWorkflow(event: MouseEvent) {
    this.openDialogService.openDialog(CreateWorkflowComponent);
  }


}
