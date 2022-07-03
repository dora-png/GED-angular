import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OpenDialogService {

  constructor(
    private dialog: MatDialog,
    private router: Router) { }

  openDialog(component: ComponentType<unknown>, data?: any) {
    let dialogConfig = new MatDialogConfig();    
    dialogConfig.disableClose = true;
    dialogConfig.minWidth="auto";
    dialogConfig.maxHeight="100%";
    dialogConfig.maxHeight="100%";
    dialogConfig.minHeight="auto";
    dialogConfig.data=data;    
    const dialogRef = this.dialog.open(component,dialogConfig);
    return dialogRef;
   /* dialogRef.afterClosed().subscribe(result => {
      return true;
    });*/
  }
}
