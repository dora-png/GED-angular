import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/loader/authentication.service';

@Component({
  selector: 'app-read-doc',
  templateUrl: './read-doc.component.html',
  styleUrls: ['./read-doc.component.scss']
})
export class ReadDocComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: number,
    private auth: AuthenticationService,
    private dialogRef:  MatDialogRef<ReadDocComponent>
  ) { }

  ngOnInit(): void {
  }

  onClose(){
    this.dialogRef.close(false);
  }
  
}
