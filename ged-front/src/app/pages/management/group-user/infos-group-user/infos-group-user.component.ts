import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { GroupUser, Postes, Roles } from 'src/app/model';

@Component({
  selector: 'app-infos-group-user',
  templateUrl: './infos-group-user.component.html',
  styleUrls: ['./infos-group-user.component.scss']
})
export class InfosGroupUserComponent implements OnInit {
/*
  newGroupFormGroup!: FormGroup;  
  roleslistesList: Array<Roles>=[];
  structureSupEmpty: boolean= false;
  isValid: boolean=true;
  posteslistesList: Array<Postes>=[];
  posteslistesEmpty: boolean=false;
  roleslistesEmpty: boolean=false;
  nameGroup: string="";
  date!: Date;
  
  
   
  constructor(    
    @Inject(MAT_DIALOG_DATA) private data: GroupUser,
    private formBuilder: FormBuilder,
    
    private dialogRef:  MatDialogRef<InfosGroupUserComponent>
  ) { 
    
    this.nameGroup = this.data.name!;
    this.date = this.data.dateCreation!
    this.newGroupFormGroup = formBuilder.group(
      {
        name: new FormControl(this.data.name!, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
      }
    );
    if(this.data.posteslistes!.length<=0){
      this.posteslistesEmpty=false;
    }else{
      this.posteslistesEmpty=true;
      this.posteslistesList=this.data.posteslistes!;
    }
    if(this.data.roleslistes!.length<=0){
      this.roleslistesEmpty=false;
    }else{
      this.roleslistesEmpty=true;
      this.roleslistesList=this.data.roleslistes!;
    }
  }*/
  ngOnInit() {
  }
/*
  onClose(){
    this.dialogRef.close(false);
  }
*/
}
