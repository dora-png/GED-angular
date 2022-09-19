import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { StructureControllerService, Structures } from 'src/app/model';

@Component({
  selector: 'app-delete-structure',
  templateUrl: './delete-structure.component.html',
  styleUrls: ['./delete-structure.component.scss']
})
export class DeleteStructureComponent implements OnInit {
  name!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Structures,  
    private toastr: ToastrService,
    private apiService: StructureControllerService,
    private dialogRef:  MatDialogRef<DeleteStructureComponent>
  ) { }

  ngOnInit(): void {
    this.name = this.data.name!+' ('+this.data.sigle!+')';
  }
/*
  deleteStructure(){
    this.apiService.deleteStructures(this.data.idstructure!).subscribe(
      Response=>{
        this.toastr.success('',"Success");
        this.dialogRef.close(true);
      },
      error=>{
        this.toastr.error('',"Error");
      }
    );
  }

  onClose(){
    this.dialogRef.close(false);
  }
*/
}
