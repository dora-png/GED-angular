import { Component, OnInit } from '@angular/core';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { CreatePosteComponent } from '../create-poste/create-poste.component';
import { SetUserToSubposteComponent } from '../set-user-to-subposte/set-user-to-subposte.component';
import { UpdatePosteComponent } from '../update-poste/update-poste.component';
import { ReadPosteComponent } from '../read-poste/read-poste.component';
import { AddSubposteComponent } from '../add-subposte/add-subposte.component';
import { RoleToPosteComponent } from '../role-to-poste/role-to-poste.component';
import { PosteControllerService, Postes } from '../../../../model/index';

@Component({
  selector: 'app-list-poste',
  templateUrl: './list-poste.component.html',
  styleUrls: ['./list-poste.component.scss']
})
export class ListPosteComponent implements OnInit {

  constructor(private openDialogService: OpenDialogService) { }

  ngOnInit(): void {
  }

  newPoste(event: MouseEvent) {
    this.openDialogService.openDialog(CreatePosteComponent);
  }

  openDialogSetPosteUser(event: MouseEvent) {
    this.openDialogService.openDialog(SetUserToSubposteComponent);
  }

  
  openDialogAddSubPoste(event: MouseEvent) {
    this.openDialogService.openDialog(AddSubposteComponent);
  }
  
  openDialogSetPosteRole(event: MouseEvent) {
    this.openDialogService.openDialog(RoleToPosteComponent);
  }

  openDialogEdit(event: MouseEvent) {
    this.openDialogService.openDialog(UpdatePosteComponent);
  }

  openDialogHistoric(event: MouseEvent) {
    this.openDialogService.openDialog(ReadPosteComponent);
  }

}
