import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { GroupUser, GroupUserControllerService } from 'src/app/model';

@Component({
  selector: 'app-update-group-user',
  templateUrl: './update-group-user.component.html',
  styleUrls: ['./update-group-user.component.scss']
})
export class UpdateGroupUserComponent implements OnInit {

  newGroupFormGroup!: FormGroup;
  clicked: boolean= false;
  isValid: boolean=true;
  
  
   
  constructor(    
    @Inject(MAT_DIALOG_DATA) private data: GroupUser,
    private loaderService: LoaderService,
    private apiService: GroupUserControllerService,    
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private dialogRef:  MatDialogRef <UpdateGroupUserComponent>
  ) { 
    this.newGroupFormGroup = formBuilder.group(
      {
        name: new FormControl(this.data.name!, [Validators.required, Validators.maxLength(30), Validators.minLength(3)]),
      }
    );
  }

  ngOnInit(): void {
  }
/*
  get f(): { [key: string]: AbstractControl } {
    return this.newGroupFormGroup.controls;
  }

  onSaveNewGroup(){
    this.clicked=true;
    this.newGroupFormGroup.reset();
    this.apiService.updateGroupUserName(this.data.idgroupes! ,this.f["name"].value ).subscribe(
      res => {
        this.toastr.success("","Update");
        this.dialogRef.close(true);
      },
      error => {
        console.log(error)
        this.toastr.error(error.error.message,"Error");
        this.clicked = false;
      }
    );
  }

  onClose(){
    this.dialogRef.close(false);
  }
*/

}
