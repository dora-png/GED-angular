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

  openDialog(component: ComponentType<unknown>, data?: any, width: number = 100, height: number=100) {
    let dialogConfig = new MatDialogConfig();    
    dialogConfig.disableClose = true;
    if(width==100){
      dialogConfig.minWidth=width.toString()+"%";
    }
    dialogConfig.minHeight=height.toString()+"%";
    dialogConfig.maxHeight=width.toString()+"%";
    dialogConfig.minHeight=height.toString()+"%";
    dialogConfig.data=data;    
    console.log(dialogConfig);
    const dialogRef = this.dialog.open(component,dialogConfig);
    return dialogRef;
   /* dialogRef.afterClosed().subscribe(result => {
      return true;
    });*/
  }
}
