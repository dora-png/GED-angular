import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/loader/authentication.service';

@Component({
  selector: 'app-create-liasse',
  templateUrl: './create-liasse.component.html',
  styleUrls: ['./create-liasse.component.scss']
})
export class CreateLiasseComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: number,
    private auth: AuthenticationService,
    private dialogRef:  MatDialogRef<CreateLiasseComponent>
  ) { }

  ngOnInit(): void {
  }

  onSave(){
    this.dialogRef.close(true);
  }

  onClose(){
    this.dialogRef.close(false);
  }
}
