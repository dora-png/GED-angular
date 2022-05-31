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

  openDialog(component: ComponentType<unknown>, data?: string) {
    let dialogConfig = new MatDialogConfig();    
    dialogConfig.disableClose = true;
    dialogConfig.minWidth="75%";
    dialogConfig.maxHeight="95%";
    dialogConfig.maxHeight="95%";
    dialogConfig.minHeight="75%";
    
    //dialogConfig.data=data;    
    const dialogRef = this.dialog.open(component,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(typeof result == 'boolean'){
        if(result){
          if(typeof data == 'string'){            
            this.router.navigate([data]);
          }else{
    
          }
        }else{
  
        }
      }else{

      }
    });
  }
}
