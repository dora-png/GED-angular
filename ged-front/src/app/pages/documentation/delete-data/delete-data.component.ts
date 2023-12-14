import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.scss']
})
export class DeleteDataComponent implements OnInit {

  name!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,  
    private toastr: ToastrService,
    private dialogRef:  MatDialogRef<DeleteDataComponent>
  ) { }

  ngOnInit(): void {
    this.name = this.data.name!+' ('+this.data.sigle!+')';
  }

  deleteData(){
    this.dialogRef.close(true);
  }

  onClose(){
    this.dialogRef.close(false);
  }

}
