import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/loader/authentication.service';
import { LoaderService } from 'src/app/loader/loader.service';
import { HttpStatusCode } from 'src/app/loader/status-code';
//import { WorkFlowControllerService, WorkFlow } from 'src/app/model';
import * as constante from '../../../../loader/constante';

@Component({
  selector: 'app-create-workflow',
  templateUrl: './create-workflow.component.html',
  styleUrls: ['./create-workflow.component.scss']
})
export class CreateWorkflowComponent implements OnInit {

/*
  newWorkflowFormGroup!: FormGroup;
  constantes: any = constante;
  clicked: boolean= constante.falseValue;
  isValid: boolean=constante.trueValue;
  
  */
   
  constructor(
    /*private loaderService: LoaderService,
    private apiService: WorkFlowControllerService,       
    private auth: AuthenticationService,   
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private dialogRef:  MatDialogRef<CreateWorkflowComponent>*/
  ) { 
   /* this.newWorkflowFormGroup = formBuilder.group(
      {
        name: new FormControl(constante.nullValue, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
        sigle: new FormControl(constante.nullValue, [Validators.required, Validators.maxLength(5), Validators.minLength(2)]),
        description: new FormControl(constante.nullValue, [Validators.required, Validators.maxLength(100), Validators.minLength(10)]),
      }
    );*/
  }

  ngOnInit(): void {
  }
/*
  get f(): { [key: string]: AbstractControl } {
    return this.newWorkflowFormGroup.controls;
  }

  private initWorkFlowBean(): WorkFlow{
    return {
      idworkflows: undefined,
      name: undefined,
      sigle: undefined,
      description: undefined,
      liasses: undefined,
      typeDocs: undefined,
    };
  }

  onSaveNewWorkFow(){
    this.clicked=true;
    let body: WorkFlow=this.initWorkFlowBean();
    body.name = this.f[constante.nameSearchValue].value;
    body.sigle = this.f[constante.sigleSearchValue].value;
    body.description = this.f[constante.description].value;
    this.newWorkflowFormGroup.reset();
    this.apiService.add(body).subscribe(
      res => {
        this.toastr.success(constante.tokenDefaultValue,constante.create);
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
    this.dialogRef.close(false);
  }
*/

}
