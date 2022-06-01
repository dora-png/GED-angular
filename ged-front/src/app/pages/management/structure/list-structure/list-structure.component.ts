import { Component, OnInit } from '@angular/core';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { CreateStructureComponent } from '../create-structure/create-structure.component';
import { UpdateStructureComponent } from '../update-structure/update-structure.component';
import { AddSubstructureComponent } from '../add-substructure/add-substructure.component';
import { ReadStructureComponent } from '../read-structure/read-structure.component';

@Component({
  selector: 'app-list-structure',
  templateUrl: './list-structure.component.html',
  styleUrls: ['./list-structure.component.scss']
})
export class ListStructureComponent implements OnInit {


  constructor(private openDialogService: OpenDialogService) { }

  ngOnInit(): void {
  }

  newStructure(event: MouseEvent) {
    this.openDialogService.openDialog(CreateStructureComponent);
  }


  openDialogAddSubStructure(event: MouseEvent) {
    this.openDialogService.openDialog(AddSubstructureComponent);
  }
  openDialogEdit(event: MouseEvent) {
    this.openDialogService.openDialog(UpdateStructureComponent);
  }

  openDialogHistoric(event: MouseEvent) {
    this.openDialogService.openDialog(ReadStructureComponent);
  }


}
