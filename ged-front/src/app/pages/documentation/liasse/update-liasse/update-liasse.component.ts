import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/loader/authentication.service';

@Component({
  selector: 'app-update-liasse',
  templateUrl: './update-liasse.component.html',
  styleUrls: ['./update-liasse.component.scss']
})
export class UpdateLiasseComponent implements OnInit {

  
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: number,
    private auth: AuthenticationService,
    private dialogRef:  MatDialogRef<UpdateLiasseComponent>
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
