import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
//import { GroupUser, GroupUserControllerService } from 'src/app/model';

@Component({
  selector: 'app-update-group-user',
  templateUrl: './update-group-user.component.html',
  styleUrls: ['./update-group-user.component.scss']
})
export class UpdateGroupUserComponent implements OnInit {
/*
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
        name: new FormControl(this.data.name!, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
      }
    );
  }
*/
  ngOnInit(): void {
  }
/*
  get f(): { [key: string]: AbstractControl } {
    return this.newGroupFormGroup.controls;
  }

  private initGroupBean(): GroupUser{
    return {
      idgroupes: this.data.idgroupes!,
      name: undefined,
      posteslistes: this.data.posteslistes!,
      roleslistes: this.data.roleslistes!,
      dateCreation: this.data.dateCreation!
    };
  }

  onSaveNewGroup(){
    this.clicked=true;
    let body: GroupUser=this.initGroupBean();
    body.name = this.f["name"].value;
    this.newGroupFormGroup.reset();
    this.apiService.updateGroupUserName(body).subscribe(
      res => {
        this.toastr.success("","Update");
        this.dialogRef.close(true);
      },
      error => {
        console.log(error)
        this.f["name"].setValue(body.name); 
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
