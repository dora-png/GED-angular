import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { GroupUser, GroupUserControllerService } from 'src/app/model';

@Component({
  selector: 'app-add-group-user',
  templateUrl: './add-group-user.component.html',
  styleUrls: ['./add-group-user.component.scss']
})
export class AddGroupUserComponent implements OnInit {

  newGroupFormGroup!: FormGroup;
  clicked: boolean= false;
  isEmpty: boolean = true;
  loading: boolean = false;

  
   
  constructor(
    private dialogRef:  MatDialogRef<AddGroupUserComponent>,    
    private openDialogService: OpenDialogService,
    private apiService: GroupUserControllerService, 
    private formBuilder: FormBuilder,    
    private toastr: ToastrService
  ) { 
    this.newGroupFormGroup = formBuilder.group(
      {
        name: new FormControl(null, [Validators.required, Validators.maxLength(30), Validators.minLength(3)]),
      }
    );
  }

  ngOnInit(): void {
    
  }
  get f(): { [key: string]: AbstractControl } {
    return this.newGroupFormGroup.controls;
  }
  private initGroupBean(): GroupUser{
    return {
      idgroupes: undefined,
      name: undefined,
      dateCreation: undefined,
      posteslistes: undefined,
      roleslistes: undefined
    };
  }

  onSaveNewGroup(){
    this.clicked=true;
    let body: GroupUser=this.initGroupBean();
    body.name = this.f["name"].value;
    this.newGroupFormGroup.reset();
    this.apiService.addGroupUser(body).subscribe(
      res => {
        this.toastr.success("","Create");
        this.dialogRef.close(true);
      },
      error => {
        this.toastr.error(error.error.message,"Error");
        this.f["name"].setValue(""); 
        this.clicked = false;
      }
    );
  }


  onClose(){
    this.dialogRef.close(false);
  }
 

}
