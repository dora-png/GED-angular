import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/loader/authentication.service';

@Component({
  selector: 'app-update-doc',
  templateUrl: './update-doc.component.html',
  styleUrls: ['./update-doc.component.scss']
})
export class UpdateDocComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: number,
    private auth: AuthenticationService,
    private dialogRef:  MatDialogRef<UpdateDocComponent>
  ) { }

  ngOnInit(): void {
  }

  onClose(){
    this.dialogRef.close(false);
  }

  onSave(){
    if(confirm("Confirmer la Sauvegarde ?")){
      this.dialogRef.close(true);
    }else{
      this.dialogRef.close(false);
    }
    
  }

}
