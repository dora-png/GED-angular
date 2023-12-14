import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/loader/authentication.service';
import { LoaderService } from 'src/app/loader/loader.service';
import { HttpStatusCode } from 'src/app/loader/status-code';
//import { WorkFlowControllerService, WorkFlow } from 'src/app/model';
import * as constante from '../../../../loader/constante';

@Component({
  selector: 'app-update-workflow',
  templateUrl: './update-workflow.component.html',
  styleUrls: ['./update-workflow.component.scss']
})
export class UpdateWorkflowComponent implements OnInit {
  newWorkflowFormGroup!: FormGroup;
  constantes: any = constante;
  clicked: boolean= constante.falseValue;
  isValid: boolean=constante.trueValue;
  
  
   
  constructor(    
    /*@Inject(MAT_DIALOG_DATA) private data: WorkFlow,
    private loaderService: LoaderService,
    //private apiService: WorkFlowControllerService,     
    private auth: AuthenticationService,  
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private dialogRef:  MatDialogRef<UpdateWorkflowComponent>*/
  ) { 
    /*this.newWorkflowFormGroup = formBuilder.group(
      {
        name: new FormControl(this.data.name!, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
        sigle: new FormControl(this.data.sigle!, [Validators.required, Validators.maxLength(5), Validators.minLength(2)]),
        description: new FormControl(this.data.description!, [Validators.required, Validators.maxLength(100), Validators.minLength(10)]),
      }
    );*/
  }

  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.newWorkflowFormGroup.controls;
  }
/*
  private initWorkFlowBean(): WorkFlow{
    return {
      idworkflows: this.data.idworkflows!,
      name: undefined,
      sigle: undefined,
      description: undefined,
      liasses: undefined,
      typeDocs: undefined,
      dateCreation:this.data.dateCreation!
    };
  }

  onSaveNewWorkFow(){
    this.clicked=constante.trueValue;
    let body: WorkFlow=this.initWorkFlowBean();
    body.name = this.f[constante.nameSearchValue].value;
    body.sigle = this.f[constante.sigleSearchValue].value;
    body.description = this.f[constante.description].value;
    this.apiService.update(body).subscribe(
      res => {
        this.toastr.success(constante.tokenDefaultValue,constante.update);
        this.dialogRef.close(constante.trueValue);
      },error => {
        if(error.status === HttpStatusCode.Unauthorized){
          this.auth.onLogOut5S(error.error);
        }else{
          if(error.status === HttpStatusCode.Unauthorized){
            this.auth.onLogOut5S(error.error);
          }else{
            this.toastr.error(constante.tokenDefaultValue,constante.error);
            this.f[constante.sigleSearchValue].setValue(body.sigle); 
            this.f[constante.nameSearchValue].setValue(body.name); 
            this.f[constante.description].setValue(body.description);
            this.clicked = constante.falseValue;
          }
        }        
      }
    );
  }

  onClose(){
    this.dialogRef.close(constante.falseValue);
  }
*/

}
