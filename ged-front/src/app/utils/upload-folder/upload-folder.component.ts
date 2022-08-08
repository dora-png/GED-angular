
import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import * as constante from '../../loader/constante';
//import { LiasseControllerService, UsersControllerService, Liasses, Users } from 'src/app/model';
import { AuthenticationService } from 'src/app/loader/authentication.service';

@Component({
  selector: 'app-upload-folder',
  templateUrl: './upload-folder.component.html',
  styleUrls: ['./upload-folder.component.scss']
})
export class UploadFolderComponent implements OnInit {
/*
  newFolderForm!: FormGroup;
  constantes: any = constante;
  clicked: boolean= constante.falseValue;
  isEmpty: boolean = constante.trueValue;
  loading: boolean = constante.falseValue;

  
   
  constructor(
    private dialogRef:  MatDialogRef<UploadFolderComponent>,    
    private apiServiceUser: UsersControllerService,
    private apiService: LiasseControllerService, 
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,    
    private toastr: ToastrService
  ) { 
    this.newFolderForm = formBuilder.group(
      {
        name: new FormControl(constante.nullValue, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
        sigle: new FormControl(constante.nullValue, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
      }
    );
  }*/

  ngOnInit(): void {
  }/*
  get f(): { [key: string]: AbstractControl } {
    return this.newFolderForm.controls;
  }

  private initLiassesBean(): Liasses{
    return {
      idliasse: undefined,
      name: undefined,
      sigle: undefined,
      description: undefined,
      archive: undefined,
      dateCreation: undefined,
      docs: [],
      typeliasse: undefined,
      userid: undefined,
      workflowid: undefined
    };
  }

  onSaveNewFolder(){
    this.clicked=constante.trueValue;
    let loginUser: string = constante.tokenDefaultValue;
    this.auth.loginSubject.subscribe(
      (login: string)=>{
        loginUser = login;
        
      }
    );
    this.auth.emitLogin();
    this.apiServiceUser.findUserByUsername(loginUser).subscribe(
      response=>{
        if(response!=constante.nullValue){
          let user : Users = response;
          let body:Liasses = this.initLiassesBean();
          body.name = this.f[constante.nameSearchValue].value;
          body.sigle = this.f[constante.sigleSearchValue].value;
          body.userid = user;
          this.apiService.createLiasseUser(body).subscribe(
            resp=>{
              this.toastr.success(constante.tokenDefaultValue, constante.create);
              this.dialogRef.close(constante.trueValue);
            },
            error=>{
              console.log(error);
            }
          );
        }else{
          this.auth.onLogOut5S("");
        }

      },
      error=>{
        console.log(error);
      }
    );
  }
  
  onClose(){
    this.dialogRef.close(false);
  }*/

}
