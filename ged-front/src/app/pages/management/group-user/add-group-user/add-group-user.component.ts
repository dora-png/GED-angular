import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { Droits, DroitsControllerService, GroupUser, GroupUserControllerService } from 'src/app/model';
import { AddRoleGroupUserComponent } from '../add-role-group-user/add-role-group-user.component';

@Component({
  selector: 'app-add-group-user',
  templateUrl: './add-group-user.component.html',
  styleUrls: ['./add-group-user.component.scss']
})
export class AddGroupUserComponent implements OnInit {

  newGroupFormGroup!: FormGroup;
  clicked: boolean= false;
  isEmpty: boolean= true;
  isEmptyGroup: boolean= true;
  valid: boolean= false;
  touched: boolean= false;
  droitsList:Droits[]=[];  
  currentUser: string = "None" ;
  loading: boolean = true;

  
   
  constructor( 
    private apiService: GroupUserControllerService, 
    private apiServiceDroit: DroitsControllerService,
    private openDialogService: OpenDialogService,
    private formBuilder: FormBuilder,       
    private route: Router,     
    private toastr: ToastrService
  ) { 
    this.newGroupFormGroup = formBuilder.group(
      {
        name: new FormControl(null, [Validators.required, Validators.maxLength(30), Validators.minLength(3)]),
        sigle: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(3)]),
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
      sigle: undefined,
      status: undefined,
    };
  }

  setDroit(){
    this.openDialogService.openDialog(AddRoleGroupUserComponent, this.droitsList)
    .afterClosed()
    .subscribe(result => {
      if(result != null){
        this.droitsList = result;                                
      }else{
        this.droitsList = this.initDroitsList();
      }
    });
  }


  initDroitsList(): Droits[] {
    return [];
  }

  onSaveNewGroup(){
    this.clicked=true;
    let body: GroupUser=this.initGroupBean();
    body.name = this.f["name"].value;
    body.sigle = this.f["sigle"].value;
    this.newGroupFormGroup.reset();
    let ids: number[] = [];
    this.droitsList.forEach(
      (droit)=>{
        ids.push(droit.iddroit!);
      }
    )
    this.apiService.addGroupUser(body, ids).subscribe(
      res => {
        this.toastr.success("","Create");
        this.route.navigate(['manage/security']);
      },
      error => {
        this.toastr.error(error.error.message,"Error");
        this.f["name"].setValue(body.name); 
        this.f["sigle"].setValue(body.sigle);  
        this.droitsList = this.initDroitsList();
        this.clicked = false;
      }
    );
  }

  onTouch(){
    this.touched = true;
  }

  onValidData() :boolean{
    if(this.newGroupFormGroup.valid){
      if(this.droitsList.length != 0){
        return true;
      }
    }
    return false;
  }

 
}
