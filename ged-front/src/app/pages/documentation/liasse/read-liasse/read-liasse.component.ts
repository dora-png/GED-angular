import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/loader/authentication.service';

@Component({
  selector: 'app-read-liasse',
  templateUrl: './read-liasse.component.html',
  styleUrls: ['./read-liasse.component.scss']
})
export class ReadLiasseComponent implements OnInit {

  
  
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: number,
    private auth: AuthenticationService,
    private dialogRef:  MatDialogRef<ReadLiasseComponent>
  ) { }

  ngOnInit(): void {
  }

  onClose(){
    this.dialogRef.close(false);
  }

}
